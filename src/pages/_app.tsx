import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { DehydratedState } from "@tanstack/react-query";
import { Hydrate } from "@tanstack/react-query";

import { AppProvider } from "../contexts/AppProvider";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

const MyApp: AppType<{
  session: Session | null;
  dehydrateState: DehydratedState;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Hydrate state={pageProps.dehydrateState}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
          <Analytics />
        </Hydrate>
        <ReactQueryDevtools />
      </AppProvider>
    </SessionProvider>
  );
};

export default MyApp;
