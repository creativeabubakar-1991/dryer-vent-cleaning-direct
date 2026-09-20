import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/search",
          "/tag/",
          "/author/",
          "/*?*",
        ],
      },
    ],
    sitemap: [
      `${siteConfig.domain}/sitemap_index.xml`,
      `${siteConfig.domain}/sitemap-locations.xml`,
      `${siteConfig.domain}/sitemap-services.xml`,
      `${siteConfig.domain}/sitemap-symptoms.xml`,
      `${siteConfig.domain}/sitemap-guides.xml`,
    ],
    host: siteConfig.domain,
  };
}
