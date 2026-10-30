import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import { pageMetadata } from "../lib/seo";
import { PARTNERSHIPS_EMAIL } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Babcock Tech Week",
  description: "Get in touch with the Babcock Tech Week team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact"
      badge="Get in touch"
      description="Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you."
    >
      <p className="text-base md:text-lg text-white/60 text-center max-w-md mb-10 leading-relaxed">
        Sponsorship and partnerships:{" "}
        <a
          href={`mailto:${PARTNERSHIPS_EMAIL}`}
          className="text-white underline hover:text-white/80 transition-colors"
        >
          {PARTNERSHIPS_EMAIL}
        </a>
      </p>
    </ComingSoon>
  );
}
