import { NextResponse } from "next/server";
import { getAllCities, getAllStates } from "@/lib/data";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  const cities = getAllCities();
  const states = getAllStates();
  const now = new Date().toISOString();

  const urls: { loc: string; changefreq: string; priority: string }[] = [
    { loc: `${siteConfig.domain}/`, changefreq: "daily", priority: "1.0" },
    { loc: `${siteConfig.domain}/locations/`, changefreq: "weekly", priority: "0.9" },
  ];

  // Add 50 states
  states.forEach((st) => {
    urls.push({
      loc: `${siteConfig.domain}/locations/${st.slug}/`,
      changefreq: "weekly",
      priority: "0.85",
    });
  });

  // Add all cities
  cities.forEach((city) => {
    urls.push({
      loc: `${siteConfig.domain}/dryer-vent-cleaning-${city.slug}/`,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
