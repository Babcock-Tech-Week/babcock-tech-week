import Image from "next/image";
import { IMAGES } from "../lib/constants";

const stats = [
  { number: "1,200+", label: "attendees at the 2026 career fair" },
  { number: "63", label: "hackathon teams" },
  { number: "15", label: "sponsors" },
  { number: "14,000", label: "students on campus" },
];

const images = [
  { src: IMAGES.stats1.src, alt: IMAGES.stats1.alt },
  { src: IMAGES.stats2.src, alt: IMAGES.stats2.alt },
  { src: IMAGES.stats3.src, alt: IMAGES.stats3.alt },
  { src: IMAGES.stats4.src, alt: IMAGES.stats4.alt },
];

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="relative border-[1.5px] border-white/25 rounded-[20px] py-8 md:py-12 px-5 md:px-8 flex flex-col items-center justify-center text-center shadow-[inset_0_0_30px_rgba(255,255,255,0.03)] hover:border-white/40 transition-all duration-300">
      <div className="text-4xl md:text-5xl font-bold mb-3">{number}</div>
      <div className="text-sm text-gray-300 leading-relaxed">{label}</div>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-3xl overflow-hidden relative min-h-50 md:min-h-55 aspect-4/3">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {/* Row 1: Stat, Image, Stat, Image */}
        <StatCard number={stats[0].number} label={stats[0].label} />
        <ImageCard src={images[0].src} alt={images[0].alt} />
        <StatCard number={stats[1].number} label={stats[1].label} />
        <ImageCard src={images[1].src} alt={images[1].alt} />

        {/* Row 2: Image, Stat, Image, Stat */}
        <ImageCard src={images[2].src} alt={images[2].alt} />
        <StatCard number={stats[2].number} label={stats[2].label} />
        <ImageCard src={images[3].src} alt={images[3].alt} />
        <StatCard number={stats[3].number} label={stats[3].label} />
      </div>
    </section>
  );
}
