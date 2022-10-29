/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ross-rings.vercel.app/',
    // generateIndexSitemap: false,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: '*', disallow: '/' }]
    }
}
  