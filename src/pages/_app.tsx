import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { AppProvider } from "../contexts/AppProvider";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <Analytics />
      </AppProvider>
    </SessionProvider>
  );
};

export default MyApp;
