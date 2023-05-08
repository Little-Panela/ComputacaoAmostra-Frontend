import type { TVote } from "./TVote";

export type TProject = {
  id: string;
  name: string;
  description: string;
  team: string[];
  votes: TVote[] | TVote['id'][];
  totalVotes: number;
  uniqueVotes: number;
  status: boolean;
  github: string;
  youtube: string;
  course: CourseEnum;
};

export enum CourseEnum {
  BCC = 'bcc',
  ECOMP = 'ecomp',
}