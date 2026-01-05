import { NextResponse } from 'next/server';

// Blog pages sitemap - listing + posts
const blogPages = [
  { url: '/blog', priority: 0.9, changefreq: 'daily' },
  { url: '/blog/ai-revolutionizing-social-media-marketing', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog/ultimate-guide-content-scheduling', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog/create-viral-linkedin-posts-ai', priority: 0.8, changefreq: 'weekly' },
];

export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const urls = blogPages
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
  <!-- Blog Pages Sitemap - ${blogPages.length} URLs -->
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
