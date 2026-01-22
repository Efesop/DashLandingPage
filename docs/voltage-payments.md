# Voltage Payments Integration

Accept Bitcoin payments via Lightning Network using the Voltage Payments API.

## Overview

This integration enables instant Bitcoin payments through Lightning Network invoices. When a user clicks "Pay with Bitcoin":

1. A Lightning invoice is generated via Voltage API
2. User scans QR code or copies invoice to their wallet
3. Payment is detected via polling (every 3 seconds)
4. User is redirected to success page with download token

## Setup

### 1. Create Voltage Account

1. Sign up at [voltage.cloud](https://voltage.cloud)
2. Choose **Payments** (not Infrastructure)
3. Create an Organization and Environment
4. Create a Wallet (Mutinynet for testing, Production for live)

### 2. Get API Credentials

From the Voltage Dashboard, collect:

| Credential | Location |
|------------|----------|
| API Key | Dashboard → API Keys (Read + Write permissions) |
| Organization ID | Dashboard URL or settings |
| Environment ID | Dashboard → Environments |
| Wallet ID | Dashboard → Wallets |

### 3. Configure Environment Variables

Add to `.env.local`:

```bash
VOLTAGE_API_KEY=vltg_xxxxx
VOLTAGE_ORG_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VOLTAGE_ENV_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
VOLTAGE_WALLET_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Optional: webhook signature verification
VOLTAGE_WEBHOOK_SECRET=your-shared-secret
```

## Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  PaymentSection │────▶│ /api/voltage/    │────▶│  Voltage API    │
│    Component    │     │  create-invoice  │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                                                │
        │ polls every 3s                                 │
        ▼                                                ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Payment Modal  │────▶│ /api/voltage/    │────▶│  Check Payment  │
│   (QR Code)     │     │  verify-payment  │     │     Status      │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │
        │ on status === 'completed'
        ▼
┌─────────────────┐
│  Success Page   │
│ + Download Link │
└─────────────────┘
```

## API Endpoints

### POST `/api/voltage/create-invoice`

Creates a new Lightning invoice for the product price.

**Request:** No body required (uses configured product price)

**Response:**
```json
{
  "paymentId": "uuid",
  "lnInvoice": "lntbs...",
  "amountSats": 16682,
  "amountUsd": 14.99,
  "expiresAt": "2026-01-22T07:18:12.613Z",
  "expirationInSec": 3600
}
```

**Flow:**
1. Fetches current BTC/USD price from CoinGecko
2. Converts USD to millisatoshis
3. Creates payment via Voltage API (returns 202)
4. Polls for invoice to be ready (up to 5 seconds)
5. Returns BOLT11 invoice string

### GET `/api/voltage/verify-payment`

Checks payment status and generates download token when paid.

**Query params:** `payment_id` (required)

**Response (pending):**
```json
{
  "paymentId": "uuid",
  "status": "receiving",
  "paymentStatus": "receiving"
}
```

**Response (paid):**
```json
{
  "paymentId": "uuid",
  "status": "completed",
  "paymentStatus": "paid",
  "downloadToken": "encrypted-token",
  "expiresAt": "2026-01-23T06:18:12.000Z",
  "downloadsRemaining": 3
}
```

### POST `/api/voltage/webhook`

Receives payment notifications from Voltage (optional but recommended for production).

**Headers:**
- `x-voltage-signature`: HMAC-SHA256 signature
- `x-voltage-timestamp`: Unix timestamp

**Payload:**
```json
{
  "type": "receive",
  "detail": {
    "event": "completed",
    "data": {
      "id": "payment-uuid",
      "status": "completed"
    }
  }
}
```

## Files

| File | Purpose |
|------|---------|
| `lib/voltage.ts` | Voltage API client, types, and helpers |
| `app/api/voltage/create-invoice/route.ts` | Invoice creation endpoint |
| `app/api/voltage/verify-payment/route.ts` | Payment verification endpoint |
| `app/api/voltage/webhook/route.ts` | Webhook handler |
| `app/components/PaymentSection.tsx` | Payment UI with QR code modal |
| `app/payment/success/page.tsx` | Success page with download link |

## Payment Statuses

| Status | Meaning |
|--------|---------|
| `generating` | Invoice being created |
| `receiving` | Invoice ready, awaiting payment |
| `completed` | Payment received successfully |
| `expired` | Invoice expired (default: 1 hour) |
| `failed` | Payment failed |

## Testing

### Development (Mutinynet)

Mutinynet is Bitcoin's signet testnet. Invoice prefixes start with `lntbs`.

1. Get test sats: https://faucet.mutinynet.com/
2. Use Mutiny Wallet in signet mode
3. Scan QR code or paste invoice

### Testing via Terminal

```bash
# Create invoice
curl -X POST http://localhost:3000/api/voltage/create-invoice \
  -H "Content-Type: application/json" | jq .

# Check status
curl "http://localhost:3000/api/voltage/verify-payment?payment_id=UUID" | jq .
```

## Production Checklist

- [ ] Create Production wallet in Voltage Dashboard
- [ ] Update environment variables with production credentials
- [ ] Set up webhook endpoint for reliable payment notifications
- [ ] Configure `VOLTAGE_WEBHOOK_SECRET` for signature verification
- [ ] Test end-to-end with real Lightning payment

## Price Conversion

USD to sats conversion happens at invoice creation:

1. Fetch BTC/USD from CoinGecko API (cached 60s)
2. Convert: `millisatoshis = (usd / btcPrice) * 100,000,000,000`
3. Amount locked at invoice creation time

## Security

- Download tokens expire after 24 hours
- Maximum 3 downloads per token
- Webhook signatures verified with HMAC-SHA256
- Payment IDs are UUIDs (not guessable)

## Troubleshooting

**Invoice creation fails with 422:**
- Ensure `payment_id` is a valid UUID
- Check `amount_msats` is an integer (not string or object)

**Empty response from verify-payment:**
- Payment may not exist yet (creation is async)
- Check payment ID is correct

**"Voltage not configured" error:**
- Verify all 4 environment variables are set
- Restart dev server after adding env vars
