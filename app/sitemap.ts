import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";
import { NEWS_ARTICLES } from "./2026/_lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/editions",
    "/launchpad",
    "/contact",
    "/2026",
    "/2026/sessions",
    "/2026/team",
    ...NEWS_ARTICLES.map((a) => `/2026/news/${a.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
