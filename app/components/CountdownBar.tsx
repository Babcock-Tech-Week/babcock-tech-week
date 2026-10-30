"use client";

import { useState, useEffect } from "react";
import { COUNTDOWN_TARGET } from "../lib/constants";

const TARGET_DATE = new Date(COUNTDOWN_TARGET);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 0);
    
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // Don't render until client-side hydration is complete
  if (!timeLeft) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 flex items-center justify-center gap-4">
        {/* Left: Presented by + BUCC Logo */}
        {/* <div className="hidden md:flex items-center gap-3">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                        Presented by
                    </span>
                    <Image
                        src="/images/BUCClogo-white.png"
                        alt="BUCC Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                    />
                </div> */}

        {/* Center: Countdown */}
        <div className="flex items-center gap-3 md:gap-4 text-white">
          {/* Clock icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 shrink-0 hidden sm:block"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>

          <span className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-wider hidden lg:block">
            Until Babcock Tech Week 2027
          </span>

          <div className="flex items-center gap-2 md:gap-3 font-bold text-sm md:text-base tracking-wide">
            <span>
              {pad(timeLeft.days)}{" "}
              <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                DAYS
              </span>
            </span>
            <span>
              {pad(timeLeft.hours)}{" "}
              <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                HOURS
              </span>
            </span>
            <span>
              {pad(timeLeft.minutes)}{" "}
              <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                MINS
              </span>
            </span>
            <span className="hidden sm:inline">
              {pad(timeLeft.seconds)}{" "}
              <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                SECS
              </span>
            </span>
          </div>
        </div>

        {/* Right: Register CTA */}
        {/* <a
          href="#"
          className="py-2.5 px-5 md:px-7 rounded-full bg-white text-black text-[11px] md:text-[12px] font-bold tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-2 shrink-0"
        >
          REGISTER NOW
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a> */}
      </div>
    </div>
  );
}
