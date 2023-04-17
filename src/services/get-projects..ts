/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../lib/axios"

export async function getProjects() {
  const { data } = await api.get('/projects')
  return data
}