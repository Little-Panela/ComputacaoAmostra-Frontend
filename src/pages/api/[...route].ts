/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { env } from "process";

const api = axios.create({
  baseURL: env.API_URL!,
  headers: {
    Authorization: `Bearer ${env.API_KEY!}`,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  // @ts-expect-error - route is not a string
  const route: string = query.route!.join("/")
  delete query.route;

  switch (method) {
    case "GET":
      try {
        const { data }: any = await api.get(route, {
          params: {
            ...query,
          },
        });

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    case "POST":
      try {
        const { data }: any = await api.post(route, {
          params: {
            ...query,
          },
        });

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    case "PUT":
      try {
        const { data }: any = await api.put(route, {
          params: {
            ...query,
          },
        });

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method!} Not Allowed`);
  }
}
