"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const tracks = [
    {
        name: "HealthTech",
        color: "#4ade80",
        icon: "/images/caduceus.png",
        iconSize: "w-20 h-20",
        description:
            "Innovations in healthcare delivery, telemedicine, wearable diagnostics and AI-powered health solutions.",
    },
    {
        name: "FinTech",
        color: "#f97316",
        icon: "/images/fintech.png",
        iconSize: "w-20 h-20",
        description:
            "Transforming finance through technology, from digital banking platforms to immersive investment experiences",
    },

    {
        name: "CreativeTech",
        color: "#38bdf8",
        icon: "/images/creativityTech.png",
        iconSize: "w-20 h-20",
        description:
            "Where creativity meets technology — digital art, gaming, XR, content creation and creative tools.",
    },
];

export default function TracksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0f1115] text-white"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 2px, transparent 2px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Content */}
      <div
        className={`max-w-[1300px] mx-auto px-4 md:px-10 py-16 md:py-24 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[42px] font-bold leading-tight mb-4">
            Attend 3 Tracks with 1 Ticket
          </h2>
          <div className="w-16 h-[3px] bg-white" />
        </div>

        {/* Track Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {tracks.map((track) => (
            <div key={track.name} className="group">
              {/* Track icon */}
              <div className={`relative ${track.iconSize} mb-4`}>
                <Image
                  src={track.icon}
                  alt={track.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                style={{ color: track.color }}
              >
                {track.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://luma.com/e57ax8en"
          className="inline-block bg-white text-black py-4 px-9 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-all"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
}
