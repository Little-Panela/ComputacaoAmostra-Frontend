/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";
import nookies from "nookies";

import { env } from "../env.mjs";

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    api: `${env.API_KEY }`,
  },
});

const cookieOptions = {
  path: "/",
};

export async function proxy(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (!query.route) return res.status(404).json({ message: "Not Found!" });

  // @ts-expect-error - route is not a string
  const route: string = query.route.join("/");
  delete query.route;

  const cookies = nookies.get(res);
  const sessionToken = cookies["session_token"]
    ? serialize("session_token", cookies["session_token"], cookieOptions)
    : "";

  switch (method) {
    case "GET":
      try {
        const { data }: any = await api.get(route, {
          headers: {
            Cookie: sessionToken,
          },
          params: {
            ...query,
          },
        });

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    case "POST":
      try {
        const { data }: any = await api.post(route, {
          headers: {
            Cookie: sessionToken,
          },
          params: {
            ...query,
          },
        });

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(500).json({ message: error.message });
        }
      }
      break;
    case "PUT":
      try {
        const { data, headers } = await api.put(route, {
          params: {
            ...query,
          },
        });

        if(!headers["set-cookie"]) return res.status(200).json(data)

        const cookie = headers["set-cookie"][0];
        const token = {} as any;
        cookie!.split(";").forEach((rawItem) => {
          const name = rawItem.substring(0, rawItem.indexOf("="));
          const value = rawItem.substring(name.length + 1);
          token[name] = value;
        });

        nookies.set(
          { res },
          "session_token",
          token["session_token"],
          cookieOptions
        );

        res.status(200).json(data);
      } catch (error: any) {
        if (error.response) {
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
