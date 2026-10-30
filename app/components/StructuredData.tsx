import {
  EVENT_END_DATE,
  EVENT_NAME,
  EVENT_START_DATE,
  INFORTAINMENT_LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from "../lib/constants";

const organizers = [
  {
    "@type": "Organization",
    name: "Babcock University Computer Club (BUCC)",
    url: "https://wearebucc.com",
  },
  {
    "@type": "Organization",
    name: "Google Developer Groups On Campus Babcock",
    url: "https://www.gdgbabcock.com",
  },
  {
    "@type": "Organization",
    name: "IEEE Babcock Student Branch",
    sameAs: ["https://www.instagram.com/ieee.bu/"],
  },
  {
    // TODO: add `url` once The Infortainment Company's website is live.
    "@type": "Organization",
    name: INFORTAINMENT_LEGAL_NAME,
    description: "Operational and organisational partner of Babcock Tech Week",
    logo: `${SITE_URL}/infortainment-logo.png`,
  },
];

const event = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_NAME,
  description: SITE_DESCRIPTION,
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
  organizer: organizers,
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Babcock Tech Week",
  url: SITE_URL,
};

const serialize = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(event) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(website) }}
      />
    </>
  );
}
