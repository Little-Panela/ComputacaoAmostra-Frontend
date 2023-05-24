import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { DehydratedState } from "@tanstack/react-query";
import { Hydrate } from "@tanstack/react-query";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config.mjs";

import { AppProvider } from "../contexts/AppProvider";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from 'react'
import Loading from "../components/modules/Loading";

import "../styles/globals.css";

const MyApp: AppType<{
  session: Session | null;
  dehydrateState: DehydratedState;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [loading, setLoading] = useState(false)
  const route = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    route.events.on('routeChangeStart', handleStart)
    route.events.on('routeChangeComplete', handleComplete)

    return () => {
      route.events.off('routeChangeStart', handleStart)
      route.events.off('routeChangeComplete', handleComplete)
    }
  })

  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Hydrate state={pageProps.dehydrateState}>
          <DefaultSeo {...SEO} />
          {loading && <Loading />}
          <Component {...pageProps} />
          <Analytics />
        </Hydrate>
        <ReactQueryDevtools />
      </AppProvider>
    </SessionProvider>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);

export default I18nApp;
