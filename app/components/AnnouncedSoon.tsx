import Link from "next/link";
import { EVENT_DATES, EVENT_NAME } from "../lib/constants";

export default function AnnouncedSoon() {
  return (
    <section
      className="bg-[#0f1115] text-white py-16 md:py-24 px-4 md:px-10 text-center"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          2027 lineup and partners announced soon
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Speakers, sponsors and partners for {EVENT_NAME} ({EVENT_DATES}) will
          be announced here.
        </p>
        <Link
          href="/2026"
          className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
        >
          2026 ARCHIVE
        </Link>
      </div>
    </section>
  );
}
