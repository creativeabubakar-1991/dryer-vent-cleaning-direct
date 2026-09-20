import { NextResponse } from "next/server";
import { getAllSymptoms } from "@/lib/data";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  const symptoms = getAllSymptoms();
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${symptoms
  .map(
    (sym) => `  <url>
    <loc>${siteConfig.domain}/symptoms/${sym.slug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
