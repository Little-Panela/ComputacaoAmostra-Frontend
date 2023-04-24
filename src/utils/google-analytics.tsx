import Script from "next/script";

import { env } from "../env.mjs";

export function GoogleAnalytics() {
  const { NEXT_PUBLIC_GOOGLE_ANALYTICS_ID } = env;

  if (!NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) return null;


  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
    </>
  );
}
