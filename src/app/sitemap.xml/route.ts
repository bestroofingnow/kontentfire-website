import { NextResponse } from 'next/server';

// Master sitemap index - links to all category sitemaps
export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const sitemaps = [
    { url: '/sitemaps/core/sitemap.xml', name: 'Core Pages', count: 13 },
    { url: '/sitemaps/features/sitemap.xml', name: 'Features', count: 7 },
    { url: '/sitemaps/locations/sitemap.xml', name: 'Locations', count: 169 },
    { url: '/sitemaps/blog/sitemap.xml', name: 'Blog', count: 4 },
  ];

  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `
  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
    )
    .join('');

  const totalUrls = sitemaps.reduce((sum, s) => sum + s.count, 0);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--
    KontentFire Sitemap Index
    Total URLs: ${totalUrls}

    Sitemap Structure:
    - Core: Homepage, pricing, about, contact, legal pages (${sitemaps[0].count} URLs)
    - Features: Feature pages and sub-pages (${sitemaps[1].count} URLs)
    - Locations: 50 US States + 119 Cities (${sitemaps[2].count} URLs)
    - Blog: Blog listing and posts (${sitemaps[3].count} URLs)
  -->
  ${sitemapEntries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
