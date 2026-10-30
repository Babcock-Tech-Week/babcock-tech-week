import type { Metadata } from "next";
import { SITE_NAME } from "./site";

// OG/Twitter objects replace (not merge with) the layout's, so every page builds
// its own full set here and the layout's "/" url never leaks onto other pages.
// TODO: add a 1200x630 share image (needs Dotun's poster) to openGraph.images
// and twitter.images.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
