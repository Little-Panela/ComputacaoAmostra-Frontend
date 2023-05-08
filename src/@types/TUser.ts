import type { TVote } from './TVote';

export type TUser = {
  id: string;
  email: string;
  name: string;
  voteCount: number;
  votes: string[] | TVote[];
  createdAt: Date;
};