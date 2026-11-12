"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_VISIBLE_MS = 1000; // avoids a flash when the video is already cached
const FADE_MS = 600;

// Full-screen loader shown until the hero video can show its first frame.
// It is part of the server-rendered HTML, so the page never flashes unstyled
// content first. `ready` comes from the hero (video loaded, failed or timed out).
export default function Preloader({ ready }: { ready: boolean }) {
  const [minDone, setMinDone] = useState(false);
  const [removed, setRemoved] = useState(false);
  const hide = ready && minDone;

  useEffect(() => {
    const t = setTimeout(() => setMinDone(true), MIN_VISIBLE_MS);
    return () => clearTimeout(t);
  }, []);

  // Keep the page from scrolling underneath the loader.
  useEffect(() => {
    if (hide) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = previous;
    };
  }, [hide]);

  useEffect(() => {
    if (!hide) return;
    const t = setTimeout(() => setRemoved(true), FADE_MS);
    return () => clearTimeout(t);
  }, [hide]);

  if (removed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`preloader fixed inset-0 z-[2000] flex flex-col items-center justify-center gap-8 bg-black transition-opacity ease-out ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <noscript>
        <style>{".preloader{display:none}"}</style>
      </noscript>
      <Image
        src="/friction-logo.png"
        alt=""
        width={1260}
        height={143}
        priority
        className="w-72 md:w-[28rem] max-w-[85vw] h-auto"
      />
      <div
        aria-hidden="true"
        className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white animate-spin motion-reduce:animate-none"
      />
      <span className="sr-only">Loading Babcock Tech Week 2027</span>
    </div>
  );
}
