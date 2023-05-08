import type { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { env } from "../env.mjs";

import { putGenerateSession } from "../services/put-generate-session";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn({ user }) {
      if (!user || !user.email || !user.name) return false;

      // try {
      //   await putGenerateSession({ email: user.email, name: user.name });
      //   return true;
      // } catch (error) {
      //   return false;
      // }
      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    // brandColor: "rgb(74 222 128)", // Hex color code
    logo: "/static/icons/logo.svg", // Absolute URL to image
    // buttonText: "" // Hex color code
  },
  // TODO: CREATE LOGIN PAGE
  // pages: {
  //   signIn: '/auth/login',
  //   // signOut: '/auth/logout',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for check email message)
  //   // newUser: undefined // If set, new users will be directed here on first sign in
  // }
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
