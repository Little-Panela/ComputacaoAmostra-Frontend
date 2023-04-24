import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { destroyCookie } from "nookies";
import { useEffect } from "react";
import { putGenerateSession } from "../services/put-generate-session";

type GenerateSessionParams = {
  email: string;
  name: string;
};

export function GenerateSession() {
  const { data: session, status } = useSession();

  const { mutateAsync: generateSession } = useMutation(
    async ({ email, name }: GenerateSessionParams) => {
      await putGenerateSession({ email, name });
    }
  );

  useEffect(() => {
    if (
      status === "authenticated" &&
      session &&
      session.user &&
      session?.user.email &&
      session?.user.name
    ) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      generateSession({
        email: session.user.email,
        name: session.user.name,
      });
    } else {
      destroyCookie(null, 'session_token')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status]);

  return <></>
}
