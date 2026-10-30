"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SPONSOR_TIERS, PARTNERS } from "../lib/constants";

// Tier accent colors
const TIER_COLORS: Record<string, { accent: string; badgeBg: string; badgeText: string }> = {
  HEADLINE: { accent: "#374151", badgeBg: "#0a1628", badgeText: "#ffffff" },
  GOLD: { accent: "#ffa600", badgeBg: "#ffa600", badgeText: "#000000" },
  SILVER: { accent: "#6b7280", badgeBg: "#6b7280", badgeText: "#ffffff" },
  ASSOCIATE: { accent: "#000040", badgeBg: "#000040", badgeText: "#ffffff" },
  EXHIBITOR: { accent: "#0f766e", badgeBg: "#0f766e", badgeText: "#ffffff" },
  MEDIA: { accent: "#4338ca", badgeBg: "#4338ca", badgeText: "#ffffff" },
};

function getTierConfig(tierName: string) {
  for (const key of Object.keys(TIER_COLORS)) {
    if (tierName.includes(key)) return TIER_COLORS[key];
  }
  return { accent: "#0a1628", badgeBg: "#0a1628", badgeText: "#ffffff" };
}

function TierIcon({ tierName }: { tierName: string }) {
  if (tierName.includes("HEADLINE"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    );
  if (tierName.includes("GOLD"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    );
  if (tierName.includes("SILVER"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  if (tierName.includes("ASSOCIATE"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-3-3.87M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="8" cy="7" r="4" />
      </svg>
    );
  if (tierName.includes("EXHIBITOR"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  if (tierName.includes("MEDIA"))
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  return null;
}

function getCardBg(tierName: string, sponsorBgClass?: string) {
  if (sponsorBgClass) {
    if (sponsorBgClass.includes("teal-950")) return "#042f2e";
    if (sponsorBgClass.includes("black")) return "#000000";
    if (sponsorBgClass.includes("slate-900")) return "#0f172a";
  }
  if (tierName.includes("HEADLINE")) return "#ffffff";
  if (tierName.includes("GOLD")) return "#fef9ef";
  // Silver and below: inherit page background (white)
  return "#ffffff";
}

function getCardBorder(tierName: string, sponsorBgClass?: string) {
  if (sponsorBgClass) return "1.5px solid transparent";
  if (tierName.includes("HEADLINE")) return "1.5px solid #d1d5db";
  if (tierName.includes("GOLD")) return "1.5px solid rgba(255, 166, 0, 0.5)";
  // Silver and below: all use silver border color
  return "1.5px solid #9ca3af";
}

function getTierAccentColor(tierName: string) {
  if (tierName.includes("HEADLINE")) return "#d1d5db";
  if (tierName.includes("GOLD")) return "rgba(255, 166, 0, 0.7)";
  // Silver and below: all use silver accent color
  return "#9ca3af";
}

// Determine grid columns based on sponsor count and tier
// Headline/Gold/Silver: Constrained width (not full screen)
// Associate and below: Multi-column grid
function getGridClass(tierName: string, count: number) {
  // Headline, Gold, and Silver sponsors get prominent but constrained width
  if (tierName.includes("HEADLINE")) return "grid grid-cols-1 md:max-w-[700px] md:mx-auto";
  if (tierName.includes("GOLD")) return "grid grid-cols-1 md:max-w-[700px] md:mx-auto";
  if (tierName.includes("SILVER")) return "grid grid-cols-1 md:max-w-[700px] md:mx-auto";
  
  // Exhibitors & Strategic Partners: 2 columns on desktop
  if (tierName.includes("EXHIBITOR")) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
  
  // Associate sponsors: 2 columns on desktop (stacked in twos like exhibitors)
  if (tierName.includes("ASSOCIATE")) return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
  
  // Associate and below: responsive multi-column
  if (count === 1) return "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1";
  if (count === 2) return "grid grid-cols-1 md:grid-cols-2";
  // Default: 3 columns on desktop for spacious cards
  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3";
}

// Card height based on tier importance
// Headline, Gold, Silver: More rectangular (landscape aspect ratio)
function getCardHeight(tierName: string) {
  // Headline, Gold, Silver: shorter for landscape/rectangular appearance
  if (tierName.includes("HEADLINE") || tierName.includes("GOLD") || tierName.includes("SILVER")) {
    return "h-28 md:h-32 lg:h-36";
  }
  // Associate and below: slightly smaller
  if (tierName.includes("ASSOCIATE")) return "h-24 md:h-28 lg:h-32";
  return "h-20 md:h-24 lg:h-28";
}

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sponsor-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const cards = sectionRef.current?.querySelectorAll(".sponsor-fade-in");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0f1115] py-16 md:py-24 px-4 md:px-10 text-white"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <style>{`
        .sponsor-fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sponsor-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sponsor-card {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.4s ease;
          border: 1.5px solid #d1d5db;
        }
        .sponsor-card .accent-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          height: 1.5px;
          border-radius: 0 0 2px 2px;
          transform: translateX(-50%) scaleX(0);
          transition: transform 0.4s ease;
          z-index: 10;
          background: #d1d5db;
        }
        .sponsor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px var(--border-color, rgba(0, 0, 0, 0.12)), 0 16px 40px rgba(0, 0, 0, 0.12);
          border: 1.5px solid;
        }
        .sponsor-card:hover .accent-line {
          transform: translateX(-50%) scaleX(1);
        }
        /* Dynamic border color based on tier */
        .sponsor-card[data-tier-accent] {
          border-color: transparent;
          transition: border-color 0.4s ease;
        }
        .sponsor-card[data-tier-accent]:hover {
          border-color: currentColor;
          border-width: 2px;
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Babcock Tech Week 2026 Sponsors & Partners
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base mb-16 max-w-[600px] mx-auto">
          The sponsors and partners of the 2026 edition.
        </p>

        {/* Sponsor Tiers */}
        {SPONSOR_TIERS.map((tier, i) => {
          const config = getTierConfig(tier.name);
          const gridClass = getGridClass(tier.name, tier.sponsors.length);
          const cardHeight = getCardHeight(tier.name);

          return (
            <div key={i} className="mb-20 w-full">
              {/* Tier Badge */}
              <div className="flex justify-center mb-10 sponsor-fade-in">
                <span
                  className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm"
                  style={{ background: config.badgeBg, color: config.badgeText }}
                >
                  <TierIcon tierName={tier.name} />
                  {tier.name}
                </span>
              </div>

              {/* Sponsor Cards — full-width grid */}
              <div className={`${gridClass} gap-5 md:gap-6 lg:gap-7`}>
                {tier.sponsors.map((sponsor, j) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sponsor-card sponsor-fade-in rounded-xl ${cardHeight} flex items-center justify-center relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
                    style={{
                      transitionDelay: `${j * 80}ms`,
                      backgroundColor: getCardBg(tier.name, sponsor.bgClass),
                      border: getCardBorder(tier.name, sponsor.bgClass),
                      "--border-color": getTierAccentColor(tier.name),
                    } as React.CSSProperties}
                    aria-label={`Visit ${sponsor.name} website`}
                  >
                    <span className="accent-line" style={{ background: config.accent }} />
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        fill
                        className={`object-contain ${
                          sponsor.paddingClass || "p-4 md:p-8"
                        } ${sponsor.blend ? "mix-blend-multiply" : ""}`}
                      />
                    ) : (
                      <span className="text-lg md:text-xl font-bold text-gray-700 tracking-wide z-10">
                        {sponsor.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        {/* Community Partners */}
        <div className="mb-20 w-full sponsor-fade-in">
          <div className="flex justify-center mb-10">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-lg inline-flex items-center gap-2.5 shadow-sm" style={{ background: "#0a1628", color: "#ffffff" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              COMMUNITY PARTNERS
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
            {PARTNERS.map((partner, i) => {
              const logoPadding = partner.paddingClass || "p-4 md:p-6";

              return (
                <a
                  key={partner.name}
                  href={partner.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card sponsor-fade-in rounded-xl h-36 md:h-44 lg:h-48 flex items-center justify-center relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    backgroundColor: "#ffffff",
                    border: partner.name === "IEEE" ? "1.5px solid transparent" : "1.5px solid #9ca3af",
                    "--border-color": "#9ca3af",
                  } as React.CSSProperties}
                  aria-label={`Visit ${partner.name} website`}
                >
                  <span className="accent-line" style={{ background: "#9ca3af" }} />
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className={`object-contain ${logoPadding} ${partner.blend ? "mix-blend-multiply" : ""}`}
                    />
                  ) : (
                    <div className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-800 p-4">
                      {partner.name}
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
