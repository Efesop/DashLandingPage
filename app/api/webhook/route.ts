// Stripe webhook handler.
//
// v1.5 (Option C cross-platform sync sub) — handles three product paths:
//
//   1. Mac one-time desktop license ($14.99):
//      - checkout.session.completed (mode=payment, metadata.product_type=mac-license)
//      → grantMacEntitlement → relay /entitlements/grant-mac
//
//   2. Dash Sync subscription ($4.99/mo or $47.99/yr):
//      - checkout.session.completed (mode=subscription, metadata.product_type=sync-sub)
//        → retrieve sub, grantSyncEntitlement (initial trial start)
//      - customer.subscription.created / .updated
//        → grantSyncEntitlement (status changes, trial conversion)
//      - customer.subscription.deleted
//        → revokeSyncEntitlement (canceled at period end)
//      - invoice.paid (renewal)
//        → grantSyncEntitlement (refresh expiresAt with new period_end)
//      - charge.refunded (associated with a subscription invoice)
//        → revokeSyncEntitlement
//
// Webhook signature is verified BEFORE any handler runs. Failures
// inside a handler bubble up as 500s so Stripe will retry automatically.

import { NextRequest, NextResponse } from 'next/server';
import type Stripe from 'stripe';
import stripe from '../../../lib/stripe';
import { grantMacEntitlement } from '../../../lib/entitlement';
import { grantSyncEntitlement, revokeSyncEntitlement } from '../../../lib/syncEntitlement';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to your environment variables.' },
      { status: 500 },
    );
  }

  const body = await request.text();
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event);
        break;

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpsert(event);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event);
        break;

      case 'invoice.paid':
      case 'invoice.payment_succeeded':
        await handleInvoicePaid(event);
        break;

      case 'charge.refunded':
        await handleChargeRefunded(event);
        break;

      case 'payment_intent.succeeded':
      case 'payment_intent.payment_failed':
      case 'invoice.payment_failed':
        // Logged for observability; no entitlement action.
        console.log(`[webhook] ${event.type} ${(event.data.object as any).id}`);
        break;

      default:
        console.log(`[webhook] unhandled event ${event.type}`);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[webhook] handler error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

// ── Handlers ─────────────────────────────────────────────────────────

async function handleCheckoutCompleted(event: Stripe.Event) {
  const session = event.data.object as Stripe.Checkout.Session;
  const email = session.customer_details?.email || session.customer_email || undefined;
  if (!email) {
    console.error('[webhook] checkout.session.completed without email, session=', session.id);
    return;
  }

  // Branch on session.mode (payment = Mac one-time; subscription = sync sub)
  if (session.mode === 'subscription') {
    if (!stripe) throw new Error('stripe not configured');
    const subId = typeof session.subscription === 'string'
      ? session.subscription
      : (session.subscription as any)?.id;
    if (!subId) {
      console.error('[webhook] subscription checkout completed without subscription id');
      return;
    }
    const sub = await stripe.subscriptions.retrieve(subId);
    await grantSyncEntitlement({
      email,
      stripeCustomerId: typeof sub.customer === 'string' ? sub.customer : (sub.customer as any)?.id,
      stripeSubscriptionId: sub.id,
      currentPeriodEnd: (sub as any).current_period_end || 0,
      status: sub.status,
    });
    return;
  }

  // mode='payment' — Mac one-time desktop license
  await grantMacEntitlement({
    email,
    stripeSessionId: session.id,
    stripeCustomerId: typeof session.customer === 'string' ? session.customer : (session.customer as any)?.id,
    amountPaid: session.amount_total ?? undefined,
    currency: session.currency ?? undefined,
  });
  console.log(`[webhook] mac-license granted to ${email}`);
}

async function handleSubscriptionUpsert(event: Stripe.Event) {
  const sub = event.data.object as Stripe.Subscription;
  // Ignore non-Dash subscriptions if you ever add other products.
  const meta = sub.metadata || {};
  if (meta.product_type && meta.product_type !== 'sync-sub') return;

  const email = await resolveCustomerEmail(sub.customer);
  if (!email) {
    console.error('[webhook] subscription update without email, sub=', sub.id);
    return;
  }
  await grantSyncEntitlement({
    email,
    stripeCustomerId: typeof sub.customer === 'string' ? sub.customer : (sub.customer as any)?.id,
    stripeSubscriptionId: sub.id,
    currentPeriodEnd: (sub as any).current_period_end || 0,
    status: sub.status,
  });
}

async function handleSubscriptionDeleted(event: Stripe.Event) {
  const sub = event.data.object as Stripe.Subscription;
  const email = await resolveCustomerEmail(sub.customer);
  if (!email) {
    console.error('[webhook] subscription deleted without email, sub=', sub.id);
    return;
  }
  await revokeSyncEntitlement({ email, stripeSubscriptionId: sub.id });
}

async function handleInvoicePaid(event: Stripe.Event) {
  const invoice = event.data.object as Stripe.Invoice;
  const subId = (invoice as any).subscription as string | undefined;
  if (!subId) return; // one-time charge invoice (not a sync renewal)
  if (!stripe) throw new Error('stripe not configured');
  const sub = await stripe.subscriptions.retrieve(subId);
  const email = invoice.customer_email || (await resolveCustomerEmail(sub.customer));
  if (!email) {
    console.error('[webhook] invoice.paid without email, invoice=', invoice.id);
    return;
  }
  await grantSyncEntitlement({
    email,
    stripeCustomerId: typeof sub.customer === 'string' ? sub.customer : (sub.customer as any)?.id,
    stripeSubscriptionId: sub.id,
    currentPeriodEnd: (sub as any).current_period_end || 0,
    status: sub.status,
  });
}

async function handleChargeRefunded(event: Stripe.Event) {
  const charge = event.data.object as Stripe.Charge;
  // Refunds on subscription invoices revoke the sync entitlement.
  // For one-time mac-license refunds, we leave the relay state as-is —
  // the desktop app continues working, but the user has been refunded;
  // we may add explicit revoke-mac later if abuse becomes a problem.
  const invoiceId = (charge as any).invoice as string | undefined;
  if (!invoiceId) return;
  if (!stripe) throw new Error('stripe not configured');
  const invoice = await stripe.invoices.retrieve(invoiceId);
  const subId = (invoice as any).subscription as string | undefined;
  if (!subId) return;
  const sub = await stripe.subscriptions.retrieve(subId);
  const email = invoice.customer_email || (await resolveCustomerEmail(sub.customer));
  if (!email) return;
  await revokeSyncEntitlement({ email, stripeSubscriptionId: sub.id });
}

// ── helpers ─────────────────────────────────────────────────────────

async function resolveCustomerEmail(customer: string | Stripe.Customer | Stripe.DeletedCustomer | null): Promise<string | undefined> {
  if (!customer) return undefined;
  if (typeof customer === 'object') {
    if ((customer as any).deleted) return undefined;
    return (customer as Stripe.Customer).email || undefined;
  }
  if (!stripe) return undefined;
  try {
    const c = await stripe.customers.retrieve(customer);
    if ((c as any).deleted) return undefined;
    return (c as Stripe.Customer).email || undefined;
  } catch (err) {
    console.error('[webhook] resolveCustomerEmail failed', err);
    return undefined;
  }
}
