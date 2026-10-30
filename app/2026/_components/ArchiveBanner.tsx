import Link from "next/link";

export default function ArchiveBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1040] h-10 sm:h-9 bg-[#1a1a1a] border-b border-white/10 flex items-center justify-center px-3 text-center text-[11px] sm:text-xs text-gray-300 leading-tight">
      <p>
        You are viewing the archive of Babcock Tech Week 2026.{" "}
        <Link href="/" className="underline text-white hover:opacity-80">
          Visit the current edition
        </Link>
      </p>
    </div>
  );
}
