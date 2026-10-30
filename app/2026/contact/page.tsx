import type { Metadata } from "next";
import { pageMetadata } from "../../lib/seo";
import ComingSoon from "../_components/ComingSoon";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Babcock Tech Week",
  description:
    "Get in touch with the Babcock Tech Week team.",
  path: "/2026/contact",
});

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact"
      description="Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you."
    />
  );
}
