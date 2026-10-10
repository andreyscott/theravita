import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const routes = ["", "/about", "/explore", "/stories", "/experts", "/community", "/contribute", "/partner", "/conversations", "/editorial-standards", "/contact", "/global"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${SITE_URL}${r}`, changeFrequency: "weekly", priority: r === "" ? 1 : 0.7 }));
}
