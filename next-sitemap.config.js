/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kontentfire.com',
  generateRobotsTxt: true,
  // Disable automatic sitemap generation - we use custom route handlers
  generateIndexSitemap: false,
  exclude: ['/**'], // Exclude all pages from automatic generation
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://kontentfire.com/sitemap.xml',
    ],
  },
};
