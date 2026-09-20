import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site.config";

export async function GET() {
  const sitemaps = [
    `${siteConfig.domain}/sitemap-locations.xml`,
    `${siteConfig.domain}/sitemap-services.xml`,
    `${siteConfig.domain}/sitemap-symptoms.xml`,
    `${siteConfig.domain}/sitemap-guides.xml`,
  ];

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
