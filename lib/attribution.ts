// Page-level sale attribution (docs/sales-attribution.md).
//
// Each Stripe checkout records which dashnote.io page its buy button was on,
// plus an optional ?ref= tag for links we post elsewhere (?ref=hn). It reads
// the current URL at click time and nothing else: no cookies, no
// localStorage/sessionStorage, no third-party script. The checkout route
// validates every value and drops anything that doesn't match exactly.
//
// Browser-only: call these from click handlers or effects, never during render.

export interface CheckoutSource {
  /** Path of the page the buy button is on. */
  sourcePage: string;
  /** The page that linked to /subscribe, carried in its ?from= param. */
  fromPage?: string;
  /** ?ref= or utm_source from the current URL. */
  ref?: string;
}

function refFrom(params: URLSearchParams): string | undefined {
  return params.get('ref') || params.get('utm_source') || undefined;
}

export function checkoutSource(): CheckoutSource {
  const params = new URLSearchParams(window.location.search);
  return {
    sourcePage: window.location.pathname,
    fromPage: params.get('from') || undefined,
    ref: refFrom(params),
  };
}

/**
 * /subscribe link for the current page. The Sync checkout lives on
 * /subscribe, so without ?from= every Sync sale would look like it came from
 * /subscribe instead of the article that sent the buyer there.
 */
export function subscribeHref(): string {
  const current = new URLSearchParams(window.location.search);
  const params = new URLSearchParams({ from: window.location.pathname });
  const ref = refFrom(current);
  if (ref) params.set('ref', ref);
  return `/subscribe?${params}`;
}
