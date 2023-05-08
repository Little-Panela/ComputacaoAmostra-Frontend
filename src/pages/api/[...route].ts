import type { NextApiRequest, NextApiResponse } from "next";

import { proxy } from "../../server/proxy";
import rateLimit from "../../utils/rate-limit";


const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await limiter.check(res, 20, "CACHE_TOKEN") // 20 requests per second
    await proxy(req, res);
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }
}
