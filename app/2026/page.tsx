import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SpeakersSection from "./_components/SpeakersSection";
import SponsorsSection from "./_components/SponsorsSection";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";
import TracksSection from "./_components/TracksSection";

export const metadata: Metadata = pageMetadata({
  title: "Babcock Tech Week | 22-29 March 2026",
  description:
    "Babcock Tech Week 2026, 22-29 March 2026, at Babcock University. Organised by the Babcock University Computer Club (BUCC).",
  path: "/2026",
});

export default function Home2026() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <p className="bg-black text-center text-[13px] text-gray-400 leading-relaxed px-4 md:px-10 py-4">
          Babcock Tech Week 2026 was the founding edition of Babcock Tech Week.
          Some press coverage below counts earlier TechXplore events as earlier
          editions.
        </p>
        <TracksSection />
        <SpeakersSection />
        <SponsorsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
