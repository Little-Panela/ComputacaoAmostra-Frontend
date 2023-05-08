import axios from "axios";

import { env } from "../env.mjs";

const apiUrl = env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
});
