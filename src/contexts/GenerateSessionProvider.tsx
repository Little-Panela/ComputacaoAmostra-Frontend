import type { ReactNode} from "react";
import { createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

import { putGenerateSession } from "../services/put-generate-session";
import { parseCookies } from "nookies";

type GenerateSessionParams = {
  email: string;
  name: string;
};

export type GenerateSessionContextDataProps = {
  isLoading: boolean;
};

type GenerateSessionContextProviderProps = {
  children: ReactNode;
};

export const GenerateSessionContext =
  createContext<GenerateSessionContextDataProps>(
    {} as GenerateSessionContextDataProps
  );

export function GenerateSessionProvider({
  children,
}: GenerateSessionContextProviderProps) {
  const { data: session, status } = useSession();

  const { mutateAsync, isLoading } = useMutation(
    async ({ email, name }: GenerateSessionParams) => {
      await putGenerateSession({ email, name });
    }
  );

  const sessionToken = parseCookies()["session_token"];

  useEffect(() => {
    if (
      status === "authenticated" &&
      session &&
      session.user &&
      session?.user.email &&
      session?.user.name &&
      !sessionToken
    ) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      mutateAsync({
        email: session.user.email,
        name: session.user.name,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status]);

  return (
    <GenerateSessionContext.Provider
      value={{
        isLoading,
      }}
    >
      {children}
    </GenerateSessionContext.Provider>
  );
}
