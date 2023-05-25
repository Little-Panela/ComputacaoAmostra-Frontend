// @ts-check
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
import configi18n from "./next-i18next.config.mjs";

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }
];

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  i18n: configi18n.i18n,

  images: {
    domains: ["lh3.googleusercontent.com", "cdn.computacao-amostra.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Origin",
            value:
              "https://computacao-amostra.com",
          },
        ],
      },
    ];
  },
};

export default config;
