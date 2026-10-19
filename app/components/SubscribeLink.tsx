'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { subscribeHref } from '../../lib/attribution';

// Link to /subscribe that carries the page it sits on (?from=) and that
// page's ?ref=, so a Sync checkout is credited to the article the buyer came
// from (docs/sales-attribution.md). The server HTML keeps a plain /subscribe
// href; the query is added after hydration and again on each navigation.
export default function SubscribeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [href, setHref] = useState('/subscribe');

  useEffect(() => {
    setHref(subscribeHref());
  }, [pathname]);

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
