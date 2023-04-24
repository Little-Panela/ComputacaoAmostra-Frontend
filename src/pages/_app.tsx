import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AppProvider } from "../contexts/AppProvider";
import { GoogleAnalytics } from "../utils/google-analytics";

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
      </AppProvider>
    </SessionProvider>
  );
};

export default MyApp;
