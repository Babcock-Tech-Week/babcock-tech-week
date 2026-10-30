import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AnnouncementSection from "./components/AnnouncementSection";
import Footer from "./components/Footer";
import CountdownBar from "./components/CountdownBar";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AnnouncementSection />
      </main>
      <Footer />
      <CountdownBar />
    </>
  );
}
