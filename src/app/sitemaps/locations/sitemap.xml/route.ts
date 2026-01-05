import { NextResponse } from 'next/server';
import { getAllStates, getAllCities } from '@/data/locations';

// Locations sitemap - 50 states + 119 cities = 169 URLs
export async function GET() {
  const baseUrl = 'https://kontentfire.com';
  const lastmod = new Date().toISOString();

  const states = getAllStates();
  const cities = getAllCities();

  // Generate state URLs
  const stateUrls = states
    .map(
      (state) => `
  <url>
    <loc>${baseUrl}/locations/${state.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('');

  // Generate city URLs
  const cityUrls = cities
    .map(
      (city) => `
  <url>
    <loc>${baseUrl}/locations/${city.stateSlug}/${city.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('');

  const totalUrls = states.length + cities.length;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Locations Sitemap - ${totalUrls} URLs (${states.length} states + ${cities.length} cities) -->
  ${stateUrls}
  ${cityUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
