import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import ComingSoon from "../_components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "The Launchpad | Babcock Tech Week",
  description:
    "Discover The Launchpad — where innovation meets opportunity at Babcock Tech Week.",
  path: "/2026/launchpad",
});

export default function LaunchpadPage() {
  return (
    <ComingSoon
      title="The Launchpad"
      description="Where innovation meets opportunity. The Launchpad is Babcock Tech Week's initiative hub for builders, dreamers, and creators."
    />
  );
}
