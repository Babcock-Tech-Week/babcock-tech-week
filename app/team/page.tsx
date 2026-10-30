import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamOrganogram from "../components/TeamOrganogram";

export const metadata: Metadata = {
  title: "Team | Babcock Tech Week",
  description:
    "Meet the team behind Babcock Tech Week — the students, organisers, and partners making it all happen.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <Header solid />
      <main>
        <TeamOrganogram />
      </main>
      <Footer />
    </>
  );
}
