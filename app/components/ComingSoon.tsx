import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../lib/constants";
import { PARTNERSHIPS_EMAIL } from "../lib/site";

type ComingSoonProps = {
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
};

export default function ComingSoon({
  title,
  description,
  badge = "Coming Soon",
  children,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        {/* Logo */}
        <Image
          src={IMAGES.logo.src}
          alt="Babcock Tech Week Logo"
          width={80}
          height={80}
          className="w-20 h-20 mb-8 opacity-80"
        />

        {/* Page title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">
          {title}
        </h1>

        {/* Status badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-white/30" />
          <span className="text-xs font-bold tracking-[0.25em] text-white/50 uppercase">
            {badge}
          </span>
          <span className="w-8 h-px bg-white/30" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-white/60 text-center max-w-md mb-10 leading-relaxed">
          {description}
        </p>

        {children}

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black py-3.5 px-8 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-gray-200 transition-all shadow-lg"
        >
          Return to Home
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </main>

      {/* Bottom divider + message */}
      <footer className="pb-10 pt-6 px-6">
        <div className="max-w-md mx-auto">
          <div className="w-full h-px bg-white/10 mb-6" />
          <p className="text-center text-sm text-white/40">
            Have suggestions for this section? Reach out at{" "}
            <a
              href={`mailto:${PARTNERSHIPS_EMAIL}`}
              className="text-white/60 underline hover:text-white transition-colors"
            >
              {PARTNERSHIPS_EMAIL}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
