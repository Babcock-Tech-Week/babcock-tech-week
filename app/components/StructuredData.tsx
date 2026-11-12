import {
  SITE_URL,
  SITE_NAME,
  EVENT_NAME,
  EVENT_DESCRIPTION,
  EVENT_START_DATE,
  EVENT_END_DATE,
  GDG_URL,
  IEEE_INSTAGRAM_URL,
  INFORTAINMENT_LEGAL_NAME,
  INFORTAINMENT_SHORT_NAME,
  INFORTAINMENT_URL,
  BUCC_URL,
} from "../lib/site";
import { COLLISIONS } from "../lib/collisions";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_NAME,
  description: EVENT_DESCRIPTION,
  startDate: EVENT_START_DATE,
  endDate: EVENT_END_DATE,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Babcock University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ilishan-Remo",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
  },
  url: SITE_URL,
  // Names only: no days, times or venues until they are announced.
  subEvent: COLLISIONS.map((c) => ({
    "@type": "Event",
    name: c.title,
    ...(c.title === "Build vs. Regulate" ? { startDate: "2027-03-23" } : {}),
  })),
  // TODO: add `image` once the 1200x630 poster/share image exists.
  organizer: [
    {
      "@type": "Organization",
      name: "Babcock University Computer Club (BUCC)",
      url: BUCC_URL,
    },
    {
      "@type": "Organization",
      name: "Google Developer Groups On Campus Babcock",
      url: GDG_URL,
    },
    {
      "@type": "Organization",
      name: "IEEE Babcock Student Branch",
      sameAs: [IEEE_INSTAGRAM_URL],
    },
    {
      "@type": "Organization",
      name: INFORTAINMENT_LEGAL_NAME,
      legalName: INFORTAINMENT_LEGAL_NAME,
      url: INFORTAINMENT_URL,
      alternateName: INFORTAINMENT_SHORT_NAME,
      description: "Operational and organisational partner of Babcock Tech Week",
      logo: `${SITE_URL}/infortainment-logo.png`,
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const serialize = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(websiteJsonLd) }}
      />
    </>
  );
}
