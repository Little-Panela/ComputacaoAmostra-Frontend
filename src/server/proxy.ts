/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

import { env } from "../env.mjs";

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
};

export async function proxy(req: NextApiRequest, res: NextApiResponse) {
  await httpProxyMiddleware(req, res, {
    target: env.API_URL,
    // @ts-expect-error - pathRewrite is not a string
    headers: {
      ...req.headers,
      api: env.API_KEY,
    },
    pathRewrite: [
      {
        patternStr: "^/api",
        replaceStr: "",
      },
    ],
  });
}
