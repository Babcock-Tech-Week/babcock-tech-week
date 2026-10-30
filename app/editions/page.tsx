import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpeakersSection from "../components/SpeakersSection";
import SponsorsSection from "../components/SponsorsSection";
import NewsSection from "../components/NewsSection";

export const metadata: Metadata = {
  title: "Editions | Babcock Tech Week",
  description:
    "Archive of the 2026 edition of Babcock Tech Week: speakers, sponsors and partners, and news coverage.",
  alternates: { canonical: "/editions" },
};

export default function EditionsPage() {
  return (
    <>
      <Header solid />
      <main>
        <section className="bg-black text-white pt-36 pb-12 px-4 md:px-10 text-center">
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              2026 edition archive
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Speakers, sponsors and partners, and news coverage from Babcock
              Tech Week 2026 (March 2026).
            </p>
            <Link
              href="/team"
              className="text-sm underline text-gray-300 hover:text-white transition-colors"
            >
              Meet the 2026 team
            </Link>
          </div>
        </section>
        <SpeakersSection />
        <SponsorsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
