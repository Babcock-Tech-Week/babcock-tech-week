import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";
import { NEWS_ARTICLES } from "./lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/editions",
    "/launchpad",
    "/sessions",
    "/team",
    "/contact",
    ...NEWS_ARTICLES.map((a) => `/news/${a.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
