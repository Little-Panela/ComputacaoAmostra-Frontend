/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { TProject } from "../@types/TProject";
import { api } from "../lib/axios"

type getProjectsType = {
  filter: "ecomp" | "bcc";
}

export async function getProjects({ filter }: getProjectsType) {
  const { data } = await api.get('projects', {
    params: {
      filter,
    }
  })

  return data as TProject[]
}