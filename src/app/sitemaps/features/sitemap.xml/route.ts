import { NextResponse } from 'next/server';

// Features pages sitemap - 7 pages
const featurePages = [
  { url: '/features', priority: 0.9, changefreq: 'weekly' },
  { url: '/features/ai-content', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/analytics', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/automation', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/images', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/scheduling', priority: 0.8, changefreq: 'monthly' },
  { url: '/features/templates', priority: 0.8, changefreq: 'monthly' },
];

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const urls = featurePages
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
  <!-- Features Pages Sitemap - ${featurePages.length} URLs -->
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
