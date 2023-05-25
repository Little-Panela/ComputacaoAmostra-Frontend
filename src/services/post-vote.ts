/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../lib/axios";

export type postVoteType = {
  captcha: string;
  projectId: string;
};

export async function postVote({ captcha, projectId }: postVoteType) {
  const { data } = await api.post(
    `users/vote?projectId=${projectId}&response=${captcha}`
  );

  return data;
}
