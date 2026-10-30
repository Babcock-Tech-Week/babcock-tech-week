import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Sessions | Babcock Tech Week",
  description:
    "Browse keynotes, panels, firesides, and workshops at Babcock Tech Week.",
  path: "/sessions",
});

export default function SessionsPage() {
  return (
    <ComingSoon
      title="Sessions"
      description="Keynotes, panels, firesides, and workshops — all the sessions that make up the Babcock Tech Week experience."
    />
  );
}
