"use client";

export default function ShowsCtaSection() {
  // const shows = [
  //   { name: "CLOUD & AI\nINFRASTRUCTURE", color: "#E8505B", icon: "☁️" },
  //   { name: "DEVOPS\nLIVE", color: "#FF6B35", icon: "⚡" },
  //   { name: "CYBER SECURITY\nWORLD", color: "#7B68EE", icon: "🛡️" },
  //   { name: "DATA CENTRE\nWORLD", color: "#4ECDC4", icon: "🏢" },
  //   { name: "BIG DATA\n& AI WORLD", color: "#95E616", icon: "📊" },
  // ];

  return (
    <section className="bg-linear-to-b from-[#0a0a2e] to-black py-20 md:py-24 px-4 md:px-10 text-center">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-[40px] font-bold mb-6 leading-tight">
          The Babcock Tech Week will run from 29 Nov - 3 Dec 2026
        </h2>

        <p className="text-base text-gray-300 mb-2">
          Tech Week brings together all disciplines including
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Medicine, Law, Agriculture, Education and Finance.
        </p>

        {/* <p className="text-lime text-lg md:text-[22px] font-semibold mb-12">
          Select your preferred show below for more details:
        </p> */}

        {/* Show Icons */}
        {/* <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
          {shows.map((show) => (
            <a
              key={show.name}
              href="#"
              className="flex flex-col items-center gap-3 text-white hover:scale-110 transition-transform cursor-pointer"
            >
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${show.color}, ${show.color}88)`,
                }}
              >
                {show.icon}
              </span>
              <span className="text-xs font-bold tracking-wider text-center whitespace-pre-line leading-snug">
                {show.name}
              </span>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}
