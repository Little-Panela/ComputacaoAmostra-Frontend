import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AppProvider } from "../contexts/AppProvider";
import { GoogleAnalytics } from "../util/google-analytics";
import { GenerateSession } from "../util/generate-session";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppProvider>
        <Component {...pageProps} />
        <GoogleAnalytics />
        <GenerateSession />
      </AppProvider>
    </SessionProvider>
  );
};

export default MyApp;
