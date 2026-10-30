import Image from "next/image";
import Link from "next/link";
import {
  EVENT_DATES_SHORT,
  ORGANISER_LINE,
  CO_ORGANISER_LINE,
} from "../lib/site";

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
            src="/images/HeroCarousel/IMG_9640.jpg"
            alt="A moment from Babcock Tech Week 2026"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
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
            Babcock Tech Week 2027 is the second edition of Babcock
            University&apos;s annual technology week. It takes place from{" "}
            <strong className="text-white">{EVENT_DATES_SHORT}</strong> at Babcock
            University, Ilishan-Remo, Ogun State, Nigeria. The theme is
            &ldquo;Friction&rdquo;.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-5">
            {ORGANISER_LINE}
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
            {CO_ORGANISER_LINE}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
