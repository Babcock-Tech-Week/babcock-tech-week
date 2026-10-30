import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import ComingSoon from "../_components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Editions | Babcock Tech Week",
  description:
    "Explore current and past editions of Babcock Tech Week.",
  path: "/2026/editions",
});

export default function EditionsPage() {
  return (
    <ComingSoon
      title="Editions"
      description="A look at the current and past editions of Babcock Tech Week — the milestones, moments, and impact across the years."
    />
  );
}
