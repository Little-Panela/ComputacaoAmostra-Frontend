// @ts-check

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

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
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
  },

  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  poweredByHeader: false,

  headers: async () => {
    return [
      {
        source: "/:path*",
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
              "https://computacao-amostra-frontend.vercel.app, https://pi.omnicesupa.com",
          },
        ],
      },
    ];
  },
};
export default config;
