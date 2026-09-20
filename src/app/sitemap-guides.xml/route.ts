import { NextResponse } from "next/server";
import { getAllGuides } from "@/lib/data";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  const guides = getAllGuides();
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${guides
  .map(
    (g) => `  <url>
    <loc>${siteConfig.domain}/learn/${g.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
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
