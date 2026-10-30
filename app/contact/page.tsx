import type { Metadata } from "next";
import { pageSocial } from "../lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PARTNERSHIPS_EMAIL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Contact | Babcock Tech Week",
  description: "Get in touch with the Babcock Tech Week team.",
  ...pageSocial("/contact", "Contact | Babcock Tech Week", "Get in touch with the Babcock Tech Week team."),
};

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main className="bg-black text-white min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
            For sponsorship and partnerships, email{" "}
            <a
              href={`mailto:${PARTNERSHIPS_EMAIL}`}
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              {PARTNERSHIPS_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
