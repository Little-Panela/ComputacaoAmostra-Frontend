import type { TProject } from './TProject';
import type { TUser } from './TUser';

export type TVote = {
  id: string;
  userId: TUser | TUser['id'];
  projectId: TProject | TProject['id'];
  createdAt: Date;
};