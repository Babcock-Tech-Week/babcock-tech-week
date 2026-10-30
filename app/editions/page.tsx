import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageSocial } from "../lib/seo";

const TITLE = "Editions | Babcock Tech Week";
const DESCRIPTION = "Current and past editions of Babcock Tech Week.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageSocial("/editions", TITLE, DESCRIPTION),
};

export default function EditionsPage() {
  return (
    <>
      <Header solid />
      <main className="bg-black text-white min-h-[70vh] px-6 pt-32 pb-24">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Editions
          </h1>
          {/* TODO: add the Babcock Tech Week 2027 entry here. */}
          <Link
            href="/2026"
            className="block border border-white/20 rounded-2xl p-6 hover:border-white/50 transition-colors"
          >
            <span className="block text-xl font-bold">Babcock Tech Week 2026</span>
            <span className="block text-sm text-white/60 mt-1">
              The founding edition, 22-29 March 2026
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
