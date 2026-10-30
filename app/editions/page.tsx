import type { Metadata } from "next";
import Link from "next/link";
import ComingSoon from "../components/ComingSoon";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Editions | Babcock Tech Week",
  description: "Explore current and past editions of Babcock Tech Week.",
  path: "/editions",
});

export default function EditionsPage() {
  return (
    <ComingSoon
      title="Editions"
      badge="Past editions"
      description="A look at the editions of Babcock Tech Week."
    >
      {/* TODO: add the 2027 edition entry here. */}
      <ul className="mb-10 text-center">
        <li>
          <Link
            href="/2026"
            className="text-white underline hover:text-white/80 transition-colors text-lg"
          >
            Babcock Tech Week 2026
          </Link>
        </li>
      </ul>
    </ComingSoon>
  );
}
