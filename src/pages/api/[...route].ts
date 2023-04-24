import type { NextApiRequest, NextApiResponse } from "next";

import { proxy } from "../../server/proxy";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await proxy(req, res);
}
