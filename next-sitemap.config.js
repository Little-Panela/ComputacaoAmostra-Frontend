/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pi.omnicesupa.com',
  generateRobotsTxt: true,
  exclude: ["/too-many-requests"]
}