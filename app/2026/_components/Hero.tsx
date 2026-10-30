"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "../_lib/constants";

const LATEST_UPDATES = [
  { text: "Tethered Hackathon 2026 winners!" },
  { text: "Team Yami — 1st place!" },
  { text: "Team BRAIN — 2nd place!" },
  { text: "Team MyCampusPal — 3rd place!" },
  { text: "View The Terms & Conditions", href: "/hackathon/terms" },
];

const HERO_IMAGES = [
  "/images/HeroCarousel/IMG_9620.jpg",
  "/images/HeroCarousel/IMG_9640.jpg",
  "/images/HeroCarousel/IMG_9646.jpg",
  "/images/HeroCarousel/IMG_9649.jpg",
  "/images/HeroCarousel/IMG_9665.jpg",
  "/images/HeroCarousel/IMG_0062.jpg",
  "/images/HeroCarousel/IMG_bill.jpg",
  "/images/HeroCarousel/IMG_9666.jpg",
  "/images/HeroCarousel/2222.jpg",
  "/images/HeroCarousel/_MG_0026.jpg",
  "/images/HeroCarousel/_MG_9978.jpg",
  "/images/HeroCarousel/IMG_9603.jpg",
  "/images/HeroCarousel/IMG_9719.jpg",
  "/images/HeroCarousel/IMG_9612_1.jpg",
];

export default function Hero() {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  // Rotate hero background images only after video ends
  useEffect(() => {
    if (!videoEnded) return;
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [videoEnded]);

  // Rotate latest updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentUpdate((prev) => (prev + 1) % LATEST_UPDATES.length);
        setIsVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (direction: "prev" | "next") => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentUpdate((prev) =>
        direction === "next"
          ? (prev + 1) % LATEST_UPDATES.length
          : (prev - 1 + LATEST_UPDATES.length) % LATEST_UPDATES.length,
      );
      setIsVisible(true);
    }, 300);
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {/* Intro Video */}
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              !videoEnded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/images/HeroCarousel/BTW%20Animation%20-%20Reel.mp4" type="video/mp4" />
          </video>

          {/* Image slides */}
          {HERO_IMAGES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Tech Week moment ${i + 1}`}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                videoEnded && i === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black" />
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center flex flex-col items-center gap-6 px-5 mt-15 transition-opacity duration-700 ${videoEnded ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={IMAGES.logo.src}
            alt="Logo"
            width={IMAGES.logo.width}
            height={IMAGES.logo.height}
            className="w-72 lg:w-96"
          />

          {/* Date & Venue */}
          <p className="text-lg md:text-xl font-normal mt-2 tracking-wide">
            22-29 March 2026, Babcock University
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 md:gap-5 mt-4 flex-wrap justify-center">
            <a
              href="/2026/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-4 px-8 md:px-10 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase hover:bg-gray-200 transition-all cursor-pointer shadow-lg"
            >
              VIEW SCHEDULE
            </a>
            <a
              href="mailto:partnerships@babcocktechweek.com"
              className="bg-black/85 text-white py-4 px-8 md:px-10 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase border border-white/20 hover:bg-white/15 transition-all cursor-pointer backdrop-blur-sm"
            >
              PARTNER WITH US
            </a>
          </div>
        </div>
      </section>

      {/* Latest Updates Strip */}
      <div className="w-full bg-black border-t border-white/10">
        <div className="max-w-[1300px] mx-auto flex items-center px-4 md:px-10 py-4 md:py-5 gap-4 md:gap-6">
          <span className="text-white text-sm md:text-base font-bold tracking-wide whitespace-nowrap">
            Latest Updates
          </span>

          <div className="w-px h-6 bg-white/30 shrink-0" />

          <div
            className={`flex-1 text-white/90 text-sm md:text-base font-medium transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {LATEST_UPDATES[currentUpdate].href ? (
              <a
                href={LATEST_UPDATES[currentUpdate].href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                {LATEST_UPDATES[currentUpdate].text}
              </a>
            ) : (
              LATEST_UPDATES[currentUpdate].text
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => goTo("prev")}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors cursor-pointer"
              aria-label="Previous update"
            >
              ‹
            </button>
            <button
              onClick={() => goTo("next")}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors cursor-pointer"
              aria-label="Next update"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
