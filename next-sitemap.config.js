/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://computacao-amostra.com',
  generateRobotsTxt: true,
  exclude: ["/too-many-requests"]
}