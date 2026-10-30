import type { Metadata } from "next";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TracksSection from "./_components/TracksSection";
import SpeakersSection from "./_components/SpeakersSection";
import SponsorsSection from "./_components/SponsorsSection";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";
import { pageSocial } from "../lib/seo";

const TITLE = "Babcock Tech Week 2026: archive of the founding edition";
const DESCRIPTION =
  "Archive of Babcock Tech Week 2026, the founding edition of Babcock Tech Week, held 22-29 March 2026 at Babcock University and organised by the Babcock University Computer Club (BUCC).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageSocial("/2026", TITLE, DESCRIPTION),
};

// TODO: StatsGrid is hidden. Show it only once the owner confirms these figures:
// 1,200+ attendees at the 2026 career fair; 63 hackathon teams; 15 sponsors;
// 14,000 students on campus (the university's student population).
// AwardBanner and TestimonialsSection were copied from Tech Week Singapore and are removed.
// The live countdown is not shown: the 2026 dates have passed.

export default function Archive2026Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <p className="bg-black text-gray-400 text-xs md:text-sm text-center px-4 md:px-10 pb-6">
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
