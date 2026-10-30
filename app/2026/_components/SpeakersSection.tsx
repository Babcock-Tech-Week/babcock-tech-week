"use client";

import { useState } from "react";
import Image from "next/image";
import { SPEAKERS, type Speaker } from "../_lib/constants";

export default function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const keynoteSpeakers = SPEAKERS.filter(
    (s) => s.category === "Opening Keynote Panel",
  );

  const firesideSpeakers = SPEAKERS.filter(
    (s) => s.category === "Fintech Track Fireside",
  );

  const CreativeTechSpeakers = SPEAKERS.filter(
    (s) => s.category === "CreativeTech Track Fireside",
  );

  const renderSpeakerGrid = (speakers: Speaker[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-4 md:gap-5">
      {speakers.map((speaker, idx) => (
        <div
          key={idx}
          className="group overflow-hidden cursor-pointer flex flex-col h-full rounded-xl bg-gray-100 shadow-sm hover:shadow-lg transition-all lg:w-[calc((100%-60px)/4)]"
          onClick={() => setSelectedSpeaker(speaker)}
        >
          {/* Photo */}
          <div className="relative aspect-square md:aspect-3/4 overflow-hidden bg-gray-200">
            {speaker.image ? (
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-200 to-gray-300 text-gray-500">
                <svg
                  className="w-20 h-20 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}

            {/* Desktop overlay — hidden on mobile */}
            <div
              className="hidden md:flex absolute bottom-0 left-0 right-0 bg-[#0a1628]/95 px-4 pb-4 pt-10 min-h-32 flex-col justify-end"
              style={{
                clipPath: "polygon(0% 25%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <h4 className="text-white text-base font-bold tracking-wide leading-tight mb-1 font-google-sans uppercase">
                {speaker.name}
              </h4>
              {speaker.role && (
                <span className="text-[#c15f3c] text-xs font-semibold tracking-wide uppercase mb-1">
                  {speaker.role}
                </span>
              )}
              <p className="text-gray-300 text-sm mt-2 leading-snug font-google-sans normal-case">
                {speaker.title}
                {speaker.company && (
                  <>
                    ,{" "}
                    <span className="text-[#c15f3c] font-semibold">
                      {speaker.company}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Mobile info — shown below photo, hidden on desktop */}
          <div className="md:hidden px-3 py-3 flex flex-col gap-0.5">
            <h4 className="text-[#0a1628] text-sm font-bold tracking-wide leading-tight font-google-sans uppercase">
              {speaker.name}
            </h4>
            {speaker.role && (
              <span className="text-[#c15f3c] text-[11px] font-semibold tracking-wide uppercase">
                {speaker.role}
              </span>
            )}
            <p className="text-gray-500 text-xs mt-1 leading-snug font-google-sans normal-case">
              {speaker.title}
              {speaker.company && (
                <>
                  ,{" "}
                  <span className="text-[#c15f3c] font-semibold">
                    {speaker.company}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section
        className="py-16 md:py-24 px-4 md:px-10 text-black"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center">
            Opening Keynote Panel
          </h2>
          {renderSpeakerGrid(keynoteSpeakers)}
        </div>
      </section>

      <section
        className="py-16 md:py-24 px-4 md:px-10 text-white"
        style={{
          backgroundColor: "#0f1115",
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center">
            Fintech Track Fireside
          </h2>
          {renderSpeakerGrid(firesideSpeakers)}
        </div>
      </section>

      <section
        className="py-16 md:py-24 px-4 md:px-10 text-black"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: "radial-gradient(#cbd5e1 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 text-center">
            CreativeTech Track Fireside
          </h2>
          {renderSpeakerGrid(CreativeTechSpeakers)}
        </div>
      </section>

      {/* Modal Dialog */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center pt-20 pb-4 px-4 sm:px-6 md:px-12 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[calc(100vh-8rem)] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 md:bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm transition-colors"
            >
              ✕
            </button>

            {/* Image Section */}
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto relative bg-linear-to-br from-gray-100 to-gray-300 shrink-0">
              {selectedSpeaker.image ? (
                <Image
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg
                    className="w-32 h-32 opacity-20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col gap-2 overflow-y-auto">
              <span className="text-xs font-bold tracking-widest text-[#c15f3c] uppercase">
                {selectedSpeaker.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-1 font-google-sans uppercase">
                {selectedSpeaker.name}
              </h3>
              {selectedSpeaker.role && (
                <span className="text-sm font-bold tracking-wide text-[#c15f3c] uppercase mb-3 inline-block">
                  {selectedSpeaker.role}
                </span>
              )}
              <p className="text-sm md:text-lg font-medium text-gray-600 mb-6 border-b pb-6 border-gray-100 font-google-sans normal-case inline-block">
                {selectedSpeaker.title}
                {selectedSpeaker.company && (
                  <>
                    , <br className="hidden md:block" />
                    <span className="text-gray-900 font-bold">
                      {selectedSpeaker.company}
                    </span>
                  </>
                )}
              </p>

              <div className="prose prose-sm md:prose-base text-gray-700 space-y-4 font-google-sans normal-case">
                {selectedSpeaker.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
