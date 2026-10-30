import type { Metadata } from "next";
import { pageSocial } from "../lib/seo";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "The Launchpad | Babcock Tech Week",
  description: "Discover The Launchpad — where innovation meets opportunity at Babcock Tech Week.",
  ...pageSocial("/launchpad", "The Launchpad | Babcock Tech Week", "Discover The Launchpad — where innovation meets opportunity at Babcock Tech Week."),
};

export default function LaunchpadPage() {
  return (
    <ComingSoon
      title="The Launchpad"
      description="Where innovation meets opportunity. The Launchpad is Babcock Tech Week's initiative hub for builders, dreamers, and creators."
    />
  );
}
