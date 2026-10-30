import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import TeamOrganogram from "../_components/TeamOrganogram";

export const metadata: Metadata = {
  title: "Team | Babcock Tech Week",
  description:
    "Meet the team behind Babcock Tech Week — the students, organisers, and partners making it all happen.",
  alternates: { canonical: "/2026/team" },
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
