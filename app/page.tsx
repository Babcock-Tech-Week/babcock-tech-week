import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AnnouncedSoon from "./components/AnnouncedSoon";
import Footer from "./components/Footer";
import CountdownBar from "./components/CountdownBar";
import TracksSection from "./components/TracksSection";
import StructuredData from "./components/StructuredData";
// Hidden until real figures are supplied:
// import StatsGrid from "./components/StatsGrid";
// Not shown: copied from another event (Singapore) and not BTW content.
// import AwardBanner from "./components/AwardBanner";
// import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TracksSection />
        <AboutSection />
        <AnnouncedSoon />
      </main>
      <Footer />
      <CountdownBar />
    </>
  );
}
