import Link from "next/link";

export default function ArchiveBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-999 h-10 sm:h-8 bg-white text-black text-[11px] sm:text-xs flex items-center justify-center px-4 text-center leading-tight">
      <p>
        You are viewing the archive of Babcock Tech Week 2026.{" "}
        <Link href="/" className="font-bold underline">
          Visit the current edition
        </Link>
      </p>
    </div>
  );
}
