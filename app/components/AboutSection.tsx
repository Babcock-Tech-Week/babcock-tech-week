"use client";

import Image from "next/image";
import Link from "next/link";
import { EVENT_DATES, IMAGES, ORGANISER_LINE } from "../lib/constants";

export default function AboutSection() {
  return (
    <section 
      className="bg-black py-16 md:py-24 px-4 md:px-10"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden relative h-[350px] md:h-[500px]">
          <Image
            src={IMAGES.about.src}
            alt={IMAGES.about.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-base font-bold text-lime tracking-widest uppercase mb-4">
            About
          </h2>

          <h3 className="text-2xl md:text-[32px] font-bold mb-6 leading-tight">
            Babcock Tech Week 2027: Friction
          </h3>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            Babcock Tech Week 2027, themed &ldquo;Friction&rdquo;, is the second
            edition of Babcock University&apos;s annual technology week.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            It runs from{" "}
            <strong className="text-white underline">{EVENT_DATES}</strong> at
            Babcock University, Ilishan-Remo, Ogun State, Nigeria.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
            {ORGANISER_LINE}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
