/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { TProject } from "../@types/TProject";
import { api } from "../lib/axios"

type getProjectType = {
  name: string;
}

export async function getProject({ name }: getProjectType) {
  const { data } = await api.get(`projects/${name}`)

  return data as TProject
}