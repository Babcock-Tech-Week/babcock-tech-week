"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ──────────────────────────── DATA ──────────────────────────── */

type Person = {
  initials: string;
  name: string;
  role: string;
  note?: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  x?: string;
};

type Team = {
  label: string;
  lead: Person;
  coLeads?: Person[];
  members?: Person[];
};

const LEADERSHIP: Person[] = [
  {
    initials: "EO",
    name: "Dr. Ernest Onuiri",
    role: "Sponsor, GDG",
    image: "/images/Team-Photos/Dr-Onuiri-Ernest.jpeg",
    linkedin: "https://www.linkedin.com/in/ernestonuiri/",
    x: "https://x.com/Ernest_Onuiri",
  },
  {
    initials: "DM",
    name: "Dunmade Majuyi O.D.",
    role: "Convener/Director",
    image: "/images/speakers/Mujuyi.jpeg",
    linkedin: "https://www.linkedin.com/in/majuyi/",
    x: "https://x.com/majuyitan",
  },
  {
    initials: "KO",
    name: "Obata Onyelukachukwu",
    role: "Organizer",
    image: "/images/speakers/KachiObata.jpeg",
    linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
    x: "https://x.com/kachiobata",
  },
  {
    initials: "FA",
    name: "Afolarin Amusa",
    role: "Sponsor, BUCC",
    image: "/images/Team-Photos/folarin-amusa.jpeg",
    linkedin: "https://www.linkedin.com/in/afolarin-amusa-704734248/",
  },
];

const TEAMS: Team[] = [
  {
    label: "LOGISTICS TEAM",
    lead: {
      initials: "AA",
      name: "Adedoja Ademola",
      role: "Logistics Lead",
      image: "/images/Team-Photos/adedoja-ademola.jpg",
      linkedin: "https://www.linkedin.com/in/adedoja-daniel-117889229/",
      x: "https://x.com/Doja_Demola",
    },
    members: [
      {
        initials: "BD",
        name: "Boloju Daniel",
        role: "Logistics",
        image: "/images/Team-Photos/boloju-daniel.png",
      },
      {
        initials: "LS",
        name: "Lawal Sharon Oluwatobiloba",
        role: "Logistics",
        image: "/images/Team-Photos/Lawal-Sharon-Oluwatobiloba.jpg",
      },
      {
        initials: "AA",
        name: "Azubike Amanda",
        role: "Logistics",
        image: "/images/Team-Photos/azubike-amanda.jpg",
      },
      {
        initials: "AP",
        name: "Akaniro Priscilla",
        role: "Logistics",
        image: "/images/Team-Photos/akaniro-priscilla.jpeg",
      },
      {
        initials: "MT",
        name: "Malaolu Tirenioluwa Motolari",
        role: "Logistics",
        image: "/images/Team-Photos/Malaolu-Tirenioluwa-Motolari .jpg",
      },
      {
        initials: "OF",
        name: "Oluwatunmibi Favour Oyindamola",
        role: "Logistics",
        image: "/images/Team-Photos/OLUWATUNMIBI FAVOUR OYINDAMOLA.jpg",
      },
      {
        initials: "UK",
        name: "Umahi Kasiemobi",
        role: "Logistics",
        image: "/images/Team-Photos/UMAHI-KASIEMOBI1.jpg",
      },
      {
        initials: "YF",
        name: "Young-Arney Favour",
        role: "Logistics",
        image: "/images/Team-Photos/Young-Arney Favour2.jpeg",
      },
      {
        initials: "VO",
        name: "Vincent Oluchukwu Destiny",
        role: "Logistics",
        image: "/images/Team-Photos/Vincent Oluchukwu Destiny.jpg",
      },
    ],
  },
  {
    label: "PROGRAMS & SCHEDULING TEAM",
    lead: {
      initials: "KO",
      name: "Obata Onyelukachukwu",
      role: "Programs & Scheduling Lead",
      image: "/images/speakers/KachiObata.jpeg",
      linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
      x: "https://x.com/kachiobata",
    },
    coLeads: [
      {
        initials: "EI",
        name: "Ezeka Ifeoma",
        role: "Co-lead",
        image: "/images/Team-Photos/ezeka-ifeoma.jpg",
        linkedin: "https://www.linkedin.com/in/ifeomaezeka/",
        x: "https://x.com/EzekaIfeoma",
      },
    ],
  },
  {
    label: "PRODUCT & BRANDING TEAM",
    lead: {
      initials: "DK",
      name: "Daniel Kadiri",
      role: "Product & Branding Lead",
      image: "/images/Team-Photos/daniel-kadiri.jpg",
      linkedin: "https://www.linkedin.com/in/kodexthecreator/",
      x: "https://x.com/kodexthecreator",
    },
    coLeads: [
      {
        initials: "UV",
        name: "Umaru Victor",
        role: "Designer",
        image: "/images/Team-Photos/umaru-victor.jpg",
        linkedin: "https://www.linkedin.com/in/victor-umaru-jr/",
        x: "https://x.com/UmaruJr",
      },
    ],
    members: [
      {
        initials: "DR",
        name: "David Roya God'swill",
        role: "Designer",
        image: "/images/Team-Photos/david-roya-godswill.jpeg",
      },
      {
        initials: "DA",
        name: "Daisy Imhanzenobe",
        role: "Designer",
        image: "/images/Team-Photos/daisy-imhanzenobe.png",
        linkedin: "https://www.linkedin.com/in/daisy-imhanzenobe-095292366/",
        x: "https://x.com/the_alexandrah",
      },
    ],
  },
  {
    label: "ENGINEERING TEAM",
    lead: {
      initials: "IV",
      name: "Ibironke Victor",
      role: "Technical Director",
      image: "/images/Team-Photos/ibironke-victor.webp",
      linkedin: "https://linkedin.com/in/victor-ibironke",
      x: "https://twitter.com/victoribironke_",
    },
  },
  {
    label: "MEDIA & MARKETING TEAM",
    lead: {
      initials: "UV",
      name: "Umaru Victor",
      role: "Media & Marketing Lead",
      image: "/images/Team-Photos/umaru-victor.jpg",
      linkedin: "https://www.linkedin.com/in/victor-umaru-jr/",
      x: "https://x.com/UmaruJr",
    },
    coLeads: [
      {
        initials: "EO",
        name: "Efegherimoni Oghenetejiri",
        role: "Co-lead",
        image: "/images/Team-Photos/efegherimoni-oghenetejiri.jpg",
        linkedin: "https://www.linkedin.com/in/oghenetejiri-efegherimoni/",
        x: "https://x.com/q_teytey",
      },
    ],
    members: [
      {
        initials: "AP",
        name: "Akaniro Priscilla",
        role: "Video Editor",
        image: "/images/Team-Photos/akaniro-priscilla.jpeg",
      },
      {
        initials: "AU",
        name: "Akubuiro Uchenna",
        role: "Photographer",
        image: "/images/Team-Photos/akubuiro-uchenna.jpg",
      },
      {
        initials: "NI",
        name: "Nathaniel Ilozumba",
        role: "Photographer",
        image: "/images/Team-Photos/nathaniel-ilozumba.jpg",
      },
      {
        initials: "OR",
        name: "Offiong Ryan",
        role: "Marketer",
        image: "/images/Team-Photos/offiong-ryan.jpg",
      },
      {
        initials: "AA",
        name: "Adesida Adewemimo",
        role: "Interviewer",
        image: "/images/Team-Photos/adesida-adewemimo.jpeg",
      },
      {
        initials: "EN",
        name: "Efut Nini Okon",
        role: "Videographer",
        image: "/images/Team-Photos/Efut-Nini-Okon.jpg",
      },
      {
        initials: "OT",
        name: "Oyedele Tosin",
        role: "Photographer",
        image: "/images/Team-Photos/Oyedele-Tosin.jpg",
      },
    ],
  },
  {
    label: "PARTNERSHIPS & EXTERNAL RELATIONS TEAM",
    lead: {
      initials: "KO",
      name: "Obata Onyelukachukwu",
      role: "Partnerships Lead",
      image: "/images/speakers/KachiObata.jpeg",
      linkedin: "https://www.linkedin.com/in/onyelukachukwu-obata/",
      x: "https://x.com/kachiobata",
    },
    coLeads: [
      {
        initials: "OF",
        name: "Olamide Fatunase",
        role: "Co-lead",
        image: "/images/Team-Photos/olamide-fatunase.jpg",
        linkedin: "https://www.linkedin.com/in/olamide-fatunase-271a5727a/",
        x: "https://x.com/Lamiiiide",
      },
    ],
  },
  {
    label: "HACKATHON TEAM",
    lead: {
      initials: "OK",
      name: "Oluwadara Kalejaiye",
      role: "Hackathon Lead",
      image: "/images/Team-Photos/Oluwadara-kalejaiye1.jpg",
      linkedin: "https://www.linkedin.com/in/oluwadara-kalejaiye-346095260/",
      x: "https://x.com/dara_kalejaiye",
    },
    coLeads: [
      {
        initials: "TA",
        name: "Adedayo Timilehin",
        role: "Co-lead",
        image: "/images/Team-Photos/timilehin-adedayo1.jpg",
        linkedin: "https://www.linkedin.com/in/timilehin-adedayo-2697a431a/",
        x: "https://x.com/kinariasu",
      },
    ],
  },
  {
    label: "WELFARE TEAM",
    lead: {
      initials: "AO",
      name: "Alfred Ogu",
      role: "Welfare Lead",
      image: "/images/Team-Photos/alfred-ogu.jpg",
      linkedin: "https://www.linkedin.com/in/alfred-ogu-b81a34296/",
      x: "https://x.com/itsayraeo",
    },
  },
  {
    label: "VOLUNTEERS TEAM",
    lead: {
      initials: "AU",
      name: "Archie-Ubong Michael",
      role: "Volunteers Lead",
      image: "/images/Team-Photos/archie-ubong.png",
      linkedin: "https://www.linkedin.com/in/michael-archie-4129011a7/",
      x: "https://x.com/Atrextubo",
    },
    coLeads: [
      {
        initials: "AT",
        name: "Alayerogun Tobiloba",
        role: "Co-lead",
        image: "/images/Team-Photos/alayerogun-tobiloba.jpeg",
        linkedin: "https://www.linkedin.com/in/alayerogun-tobiloba-794343338/",
        x: "https://x.com/darknit53153009?s=11",
      },
    ],
    members: [
      {
        initials: "CD",
        name: "Chigeru Davies Chidera",
        role: "Volunteer",
        image: "/images/Team-Photos/CHIGERU-DAVIES-CHIDERA.jpg",
      },
      {
        initials: "DI",
        name: "Daisy Imhanzenobe",
        role: "Volunteer",
        image: "/images/Team-Photos/daisy-imhanzenobe.png",
      },
      {
        initials: "OH",
        name: "Ogundimu Oluwaseun Hannah",
        role: "Volunteer",
        image: "/images/Team-Photos/OGUNDIMU OLUWASEUN HANNAH.jpg",
      },
      {
        initials: "OT",
        name: "Okochi-Thompson Obarido",
        role: "Volunteer",
        image: "/images/Team-Photos/OKOCHI-THOMPSON-Obarido.jpg",
      },
      {
        initials: "EI",
        name: "Ezeka Ifeoma",
        role: "Volunteer",
        image: "/images/Team-Photos/ezeka-ifeoma.jpg",
      },
      {
        initials: "OD",
        name: "Okojie-Owahabanun Dorcas Osemudiamhen",
        role: "Volunteer",
        image: "/images/Team-Photos/Okojie-owahabanun dorcas osemudiamhen.jpg",
      },
      {
        initials: "OA",
        name: "Okoye Ogechi Angel",
        role: "Volunteer",
        image: "/images/Team-Photos/Okoye-Ogechi-Angel.jpeg",
      },
      {
        initials: "SO",
        name: "Salami Oluwatosin",
        role: "Volunteer",
        image: "/images/Team-Photos/Salami Oluwatosin3.jpeg",
      },
      {
        initials: "SA",
        name: "Sijuade Oluwapelumi Ayodeji",
        role: "Volunteer",
        image: "/images/Team-Photos/Sijuade Oluwapelumi Ayodeji.jpg",
      },
      {
        initials: "YF",
        name: "Young-Arney Favour",
        role: "Volunteer",
        image: "/images/Team-Photos/Young-Arney Favour2.jpeg",
      },
      {
        initials: "UN",
        name: "Udome-Onyesom Idegwu Nnene",
        role: "Volunteer",
        image: "/images/Team-Photos/Udome-Onyesom-Idegwu-Nnene1.jpeg",
      },
      {
        initials: "AA",
        name: "Adedoja Ademola",
        role: "Volunteer",
        image: "/images/Team-Photos/adedoja-ademola.jpg",
      },
    ],
  },
];

/* ────────────────── SVG ICON PATHS ────────────────── */

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const X_PATH =
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

/* ──────────────────────── COMPONENTS ──────────────────────── */

function SocialIcons({ person }: { person: Person }) {
  if (!person.linkedin && !person.x) return null;

  return (
    <div className="flex items-center gap-1.5">
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn`}
          className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-white/30 hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d={LINKEDIN_PATH} />
          </svg>
        </a>
      )}
      {person.x && (
        <a
          href={person.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} X`}
          className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white/70 hover:bg-white/30 hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d={X_PATH} />
          </svg>
        </a>
      )}
    </div>
  );
}

function MobileSocialIcons({ person }: { person: Person }) {
  if (!person.linkedin && !person.x) return null;

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn`}
          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d={LINKEDIN_PATH} />
          </svg>
        </a>
      )}
      {person.x && (
        <a
          href={person.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} X`}
          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 hover:text-gray-700 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d={X_PATH} />
          </svg>
        </a>
      )}
    </div>
  );
}

/** Card matching SpeakersSection style exactly */
function PersonCard({
  person,
  isVisible,
  delay = 0,
}: {
  person: Person;
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div
      className="group overflow-hidden flex flex-col h-full rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {/* Photo */}
      <div className="relative aspect-square md:aspect-3/4 overflow-hidden bg-gray-200">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500">
            <span className="text-4xl md:text-5xl font-bold opacity-40">
              {person.initials}
            </span>
          </div>
        )}

        {/* Desktop overlay — same clipPath as speakers */}
        <div
          className="hidden md:flex absolute bottom-0 left-0 right-0 bg-[#0a1628]/95 px-4 pb-4 pt-10 min-h-32 flex-col justify-end"
          style={{
            clipPath: "polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <h4 className="text-white text-base font-bold tracking-wide leading-tight mb-1 font-google-sans uppercase">
                {person.name}
              </h4>
              <p className="text-[#c15f3c] text-xs font-semibold tracking-wide uppercase">
                {person.role}
              </p>
              {person.note && (
                <p className="text-gray-400 text-[11px] italic mt-1 tracking-wide normal-case">
                  {person.note}
                </p>
              )}
            </div>
            <SocialIcons person={person} />
          </div>
        </div>
      </div>

      {/* Mobile info — shown below photo */}
      <div className="md:hidden px-3 py-3 flex flex-col gap-0.5 flex-grow">
        <h4 className="text-[#0a1628] text-sm font-bold tracking-wide leading-tight font-google-sans uppercase">
          {person.name}
        </h4>
        <span className="text-[#c15f3c] text-[11px] font-semibold tracking-wide uppercase">
          {person.role}
        </span>
        {person.note && (
          <span className="text-gray-400 text-[10px] italic mt-0.5 normal-case">
            {person.note}
          </span>
        )}
        <div className="mt-auto pt-1.5">
          <MobileSocialIcons person={person} />
        </div>
      </div>
    </div>
  );
}

/** Connector line between organogram sections */
function ConnectorLine({
  isVisible,
  delay = 0,
}: {
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div className="flex justify-center">
      <div
        className="w-px bg-gray-300 transition-all duration-700 ease-out"
        style={{
          height: isVisible ? "48px" : "0px",
          transitionDelay: `${delay}ms`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}

/** Team heading badge — styled like sponsor tier badges */
function TeamHeading({
  label,
  isVisible,
  delay = 0,
}: {
  label: string;
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div
      className="flex justify-center transition-all duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <span
        className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm"
        style={{ background: "#0a1628", color: "#ffffff" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        {label}
      </span>
    </div>
  );
}

/** Branch connector for side-by-side cards */
function BranchConnector({
  isVisible,
  delay = 0,
}: {
  isVisible: boolean;
  delay?: number;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[400px] h-6">
        {/* Horizontal bar */}
        <div
          className="absolute top-0 left-[20%] right-[20%] h-px bg-gray-300 transition-all duration-500"
          style={{
            transitionDelay: `${delay}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          }}
        />
        {/* Left drop */}
        <div
          className="absolute top-0 left-[20%] w-px h-full bg-gray-300 transition-all duration-400"
          style={{
            transitionDelay: `${delay + 50}ms`,
            opacity: isVisible ? 1 : 0,
          }}
        />
        {/* Right drop */}
        <div
          className="absolute top-0 right-[20%] w-px h-full bg-gray-300 transition-all duration-400"
          style={{
            transitionDelay: `${delay + 50}ms`,
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}

function TeamSection({
  team,
  index,
  isVisible,
}: {
  team: Team;
  index: number;
  isVisible: boolean;
}) {
  const baseDelay = 150 + index * 120;
  const hasCoLeads = team.coLeads && team.coLeads.length > 0;
  const hasSingleCoLead = hasCoLeads && team.coLeads!.length === 1;
  const hasMembers = team.members && team.members.length > 0;

  return (
    <div className="flex flex-col items-center w-full">
      <ConnectorLine isVisible={isVisible} delay={baseDelay} />
      <TeamHeading
        label={team.label}
        isVisible={isVisible}
        delay={baseDelay + 80}
      />
      <ConnectorLine isVisible={isVisible} delay={baseDelay + 160} />

      {!hasCoLeads ? (
        /* Solo lead — centered */
        <div className="w-full max-w-[220px] md:max-w-[240px]">
          <PersonCard
            person={team.lead}
            isVisible={isVisible}
            delay={baseDelay + 240}
          />
        </div>
      ) : hasSingleCoLead ? (
        /* Lead + 1 co-lead — side by side */
        <div className="w-full max-w-[500px]">
          <BranchConnector isVisible={isVisible} delay={baseDelay + 200} />
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <PersonCard
              person={team.lead}
              isVisible={isVisible}
              delay={baseDelay + 280}
            />
            <PersonCard
              person={team.coLeads![0]}
              isVisible={isVisible}
              delay={baseDelay + 360}
            />
          </div>
        </div>
      ) : (
        /* Lead on top, multiple co-leads side by side below */
        <>
          <div className="w-full max-w-[220px] md:max-w-[240px]">
            <PersonCard
              person={team.lead}
              isVisible={isVisible}
              delay={baseDelay + 240}
            />
          </div>

          <ConnectorLine isVisible={isVisible} delay={baseDelay + 320} />

          <div className="w-full max-w-[500px]">
            <BranchConnector isVisible={isVisible} delay={baseDelay + 360} />
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {team.coLeads!.map((cl, i) => (
                <PersonCard
                  key={cl.initials + cl.name}
                  person={cl}
                  isVisible={isVisible}
                  delay={baseDelay + 420 + i * 80}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Additional members grid — below leads/co-leads */}
      {hasMembers &&
        (() => {
          const count = team.members!.length;
          // ≤ 2 members: 2-col grid, centered at lead/co-lead width
          // 3+ members: 2-col mobile, 3-col desktop
          const gridClass =
            count <= 2
              ? "grid grid-cols-2 gap-3 md:gap-4"
              : "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4";
          const maxW = count <= 2 ? "max-w-[500px]" : "max-w-[660px]";

          // Center the last card if it would be alone in its row
          // Mobile: 2-col grid, so odd count means last is alone
          // Desktop: 3-col grid, so alone when count % 3 === 1
          const oddOnMobile = count > 2 && count % 2 !== 0;
          const aloneOnDesktop = count > 2 && count % 3 === 1;
          const separateOnBoth = oddOnMobile && aloneOnDesktop;
          const separateMobileOnly = oddOnMobile && !aloneOnDesktop;
          const shouldSeparateLast = oddOnMobile || aloneOnDesktop;
          const gridMembers = shouldSeparateLast
            ? team.members!.slice(0, -1)
            : team.members!;
          const lastMember = shouldSeparateLast
            ? team.members![count - 1]
            : null;

          return (
            <>
              <ConnectorLine isVisible={isVisible} delay={baseDelay + 500} />
              <div
                className={`w-full ${maxW} mx-auto`}
                style={{
                  transitionDelay: `${baseDelay + 550}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: "all 0.5s ease",
                }}
              >
                <div className={gridClass}>
                  {gridMembers.map((m, i) => (
                    <PersonCard
                      key={m.initials + m.name}
                      person={m}
                      isVisible={isVisible}
                      delay={baseDelay + 580 + i * 60}
                    />
                  ))}
                  {/* If only alone on mobile, keep in grid on desktop */}
                  {lastMember && separateMobileOnly && (
                    <div className="hidden md:block">
                      <PersonCard
                        person={lastMember}
                        isVisible={isVisible}
                        delay={baseDelay + 580 + (count - 1) * 60}
                      />
                    </div>
                  )}
                </div>
                {/* Centered on both mobile & desktop */}
                {lastMember && separateOnBoth && (
                  <div className="flex justify-center mt-3 md:mt-4">
                    <div className="w-[calc(50%-6px)] md:w-[calc(33.333%-11px)]">
                      <PersonCard
                        person={lastMember}
                        isVisible={isVisible}
                        delay={baseDelay + 580 + (count - 1) * 60}
                      />
                    </div>
                  </div>
                )}
                {/* Centered on mobile only */}
                {lastMember && separateMobileOnly && (
                  <div className="flex justify-center mt-3 md:hidden">
                    <div className="w-[calc(50%-6px)]">
                      <PersonCard
                        person={lastMember}
                        isVisible={isVisible}
                        delay={baseDelay + 580 + (count - 1) * 60}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          );
        })()}
    </div>
  );
}

/* ──────────────────────── MAIN EXPORT ──────────────────────── */

export default function TeamOrganogram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 md:pt-24 pb-16 md:pb-24 px-4 md:px-10 text-black"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section Title — same as speakers/sponsors */}
        <div
          className="transition-all duration-800"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
            The Team
          </h2>
          <p className="text-gray-500 text-center text-sm md:text-base mb-16 max-w-[600px] mx-auto">
            Meet the people behind Babcock Tech Week — the student organizers
            making it all happen.
          </p>
        </div>

        {/* ─── Leadership ─── */}
        <div className="flex flex-col items-center mb-4">
          <TeamHeading label="LEADERSHIP" isVisible={isVisible} delay={200} />
          <ConnectorLine isVisible={isVisible} delay={280} />
          <BranchConnector isVisible={isVisible} delay={360} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full max-w-[980px]">
            {LEADERSHIP.map((person, i) => {
              // Mobile order: Dunmade(1), Obata(2), Dr Ernest(3), Afolarin(4)
              // Desktop order: original array order
              const mobileOrderClass = [
                "order-3 md:order-1", // Dr Ernest → 3rd on mobile
                "order-1 md:order-2", // Dunmade → 1st on mobile
                "order-2 md:order-3", // Obata → 2nd on mobile
                "order-4 md:order-4", // Afolarin → 4th on mobile
              ][i];
              return (
                <div key={person.name + person.role} className={mobileOrderClass}>
                  <PersonCard
                    person={person}
                    isVisible={isVisible}
                    delay={420 + i * 100}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Team Sections ─── */}
        <div className="flex flex-col items-center">
          {TEAMS.map((team, i) => (
            <TeamSection
              key={team.label}
              team={team}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ─── Bottom flourish ─── */}
        <div
          className="mt-16 flex flex-col items-center transition-all duration-700"
          style={{ transitionDelay: "1500ms", opacity: isVisible ? 1 : 0 }}
        >
          <div className="w-px h-10 bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-300 mt-1" />
          <p className="mt-4 text-xs text-gray-400 tracking-[0.2em] uppercase text-center">
            Babcock Tech Week 2026
          </p>
        </div>
      </div>
    </section>
  );
}
