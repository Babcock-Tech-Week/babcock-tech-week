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
} from "../lib/site";

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
  // TODO: add `image` once the 1200x630 poster/share image exists.
  organizer: [
    {
      "@type": "Organization",
      name: "Babcock University Computer Club (BUCC)",
      // TODO: add url once BUCC's site is live (https://wearebucc.com returned 404 when checked).
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
      description: "Operational and organisational partner of Babcock Tech Week",
      logo: `${SITE_URL}/infortainment-logo.png`,
      // TODO: add url when The Infortainment Company's site is live.
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
