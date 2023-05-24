import type { ReactNode } from "react";
import { createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

import { putGenerateSession } from "../services/put-generate-session";

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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleGenerateSession()

    async function handleGenerateSession() {
      if (
        status === "authenticated" &&
        session &&
        session.user &&
        session?.user.email &&
        session?.user.name
      ) {
        await mutateAsync({
          email: session.user.email,
          name: session.user.name,
        });
      }
    }
  }, [mutateAsync, session, status]);

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
