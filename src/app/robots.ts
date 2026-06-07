import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Lets crawlers index the whole public site and points them at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
