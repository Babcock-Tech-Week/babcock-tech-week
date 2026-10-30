import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import TeamOrganogram from "../_components/TeamOrganogram";
import { pageSocial } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Team | Babcock Tech Week",
  description:
    "Meet the team behind Babcock Tech Week — the students, organisers, and partners making it all happen.",
  ...pageSocial(
    "/2026/team",
    "Team | Babcock Tech Week",
    "Meet the team behind Babcock Tech Week — the students, organisers, and partners making it all happen.",
  ),
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
