import { NextResponse } from "next/server";
import { getAllServices } from "@/lib/data";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  const services = getAllServices();
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${services
  .map(
    (s) => `  <url>
    <loc>${siteConfig.domain}/services/${s.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
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
