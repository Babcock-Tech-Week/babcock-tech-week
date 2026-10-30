"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "../lib/constants";
import { EVENT_NAME, EVENT_DATES_SHORT, PARTNERSHIPS_EMAIL } from "../lib/site";

// TODO: replace with Dotun's poster and real updates.
const LATEST_UPDATES: { text: string; href?: string }[] = [
  { text: "Babcock Tech Week 2027: Friction, 29 Nov - 3 Dec 2026" },
  { text: "2027 lineup and partners announced soon" },
];

// Updates that fit stay for FIT_MS; longer ones hold, scroll to the end, hold, then move on.
const FIT_MS = 3500;
const HOLD_MS = 1500;
const SCROLL_PX_PER_SEC = 40;
const FADE_MS = 400;

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
  const [offset, setOffset] = useState(0);
  const [scrollMs, setScrollMs] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Rotate hero background images only after video ends
  useEffect(() => {
    if (!videoEnded) return;
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [videoEnded]);

  // Rotate latest updates, scrolling any that are wider than the strip
  const advance = (direction: "prev" | "next", delay: number) => {
    timers.current.forEach(clearTimeout);
    timers.current = [
      setTimeout(() => setIsVisible(false), Math.max(0, delay - FADE_MS)),
      setTimeout(() => {
        setCurrentUpdate((prev) =>
          direction === "next"
            ? (prev + 1) % LATEST_UPDATES.length
            : (prev - 1 + LATEST_UPDATES.length) % LATEST_UPDATES.length,
        );
        setScrollMs(0);
        setOffset(0);
        setIsVisible(true);
      }, delay),
    ];
  };

  useEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    const overflow = box && text ? Math.max(0, text.scrollWidth - box.clientWidth) : 0;
    const pending: ReturnType<typeof setTimeout>[] = [];
    let total = FIT_MS;
    if (overflow > 0) {
      const ms = (overflow / SCROLL_PX_PER_SEC) * 1000;
      pending.push(
        setTimeout(() => {
          setScrollMs(ms);
          setOffset(-overflow);
        }, HOLD_MS),
      );
      total = HOLD_MS + ms + HOLD_MS + FADE_MS;
    }
    advance("next", total);
    return () => {
      pending.forEach(clearTimeout);
      timers.current.forEach(clearTimeout);
    };
  }, [currentUpdate]);

  const goTo = (direction: "prev" | "next") => {
    setIsVisible(false);
    advance(direction, 300);
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
          <h1 className="sr-only">{EVENT_NAME}</h1>
          <Image
            src={IMAGES.logo.src}
            alt="Logo"
            width={IMAGES.logo.width}
            height={IMAGES.logo.height}
            className="w-72 lg:w-96"
          />

          {/* Date & Venue */}
          <p className="text-lg md:text-xl font-normal mt-2 tracking-wide">
            {EVENT_DATES_SHORT}, Babcock University
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 md:gap-5 mt-4 flex-wrap justify-center">
            <a
              href={`mailto:${PARTNERSHIPS_EMAIL}`}
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
            ref={boxRef}
            className={`flex-1 min-w-0 overflow-hidden text-white/90 text-sm md:text-base font-medium transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              ref={textRef}
              className="inline-block whitespace-nowrap ease-linear"
              style={{
                transform: `translateX(${offset}px)`,
                transition: `transform ${scrollMs}ms linear`,
              }}
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
            </span>
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
