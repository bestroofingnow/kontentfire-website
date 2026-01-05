import { NextResponse } from 'next/server';

// Core pages sitemap - 13 pages
const corePages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/demo', priority: 0.8, changefreq: 'weekly' },
  { url: '/faq', priority: 0.7, changefreq: 'weekly' },
  { url: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
  { url: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/terms', priority: 0.3, changefreq: 'yearly' },
  { url: '/use-cases', priority: 0.8, changefreq: 'monthly' },
  { url: '/locations', priority: 0.8, changefreq: 'weekly' },
  { url: '/locations/states', priority: 0.8, changefreq: 'weekly' },
  { url: '/locations/cities', priority: 0.8, changefreq: 'weekly' },
];

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const urls = corePages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages Sitemap - ${corePages.length} URLs -->
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
