import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * The pages search engines should index. Update this when a new public route
 * is added so Google and friends can discover it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/terms", "/support"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
