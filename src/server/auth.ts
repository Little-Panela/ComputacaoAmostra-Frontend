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
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user }) {
      if (!user || !user.email || !user.name) return false;

      try {
        await putGenerateSession({ email: user.email, name: user.name });
        return true;
      } catch (error) {
        return false;
      }
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
    logo: "/static/icons/logo.svg", // Absolute URL to image
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
