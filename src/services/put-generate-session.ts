/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../lib/axios";

type putGenerateSessionType = {
  email: string;
  name: string;
};

export async function putGenerateSession({
  email,
  name,
}: putGenerateSessionType) {
  const { data } = await api.put(`users/generate_session`, {
    params: {
      email,
      name,
    },
  });

  return data;
}
