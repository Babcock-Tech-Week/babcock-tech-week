import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Sessions | Babcock Tech Week",
  description: "Browse keynotes, panels, firesides, and workshops at Babcock Tech Week.",
  alternates: { canonical: "/sessions" },
};

export default function SessionsPage() {
  return (
    <ComingSoon
      title="Sessions"
      description="Keynotes, panels, firesides, and workshops — all the sessions that make up the Babcock Tech Week experience."
    />
  );
}
