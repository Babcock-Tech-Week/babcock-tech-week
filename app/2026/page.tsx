import type { Metadata } from "next";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SpeakersSection from "./_components/SpeakersSection";
import SponsorsSection from "./_components/SponsorsSection";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";
import TracksSection from "./_components/TracksSection";

export const metadata: Metadata = {
  title: "Babcock Tech Week | 22-29 March 2026",
  description:
    "Babcock Tech Week 2026, 22-29 March 2026, at Babcock University. Organised by the Babcock University Computer Club (BUCC).",
  alternates: { canonical: "/2026" },
};

export default function Home2026() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TracksSection />
        <SpeakersSection />
        <SponsorsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
