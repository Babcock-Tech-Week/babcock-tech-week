import { COLLISIONS, COLLISIONS_INTRO } from "../lib/collisions";
import CollisionsSignup from "./CollisionsSignup";

function Title({ title }: { title: string }) {
  const [left, right] = title.split(" vs. ");
  return (
    <>
      {left} <span className="text-lime text-[0.55em] font-semibold align-middle">vs.</span> {right}
    </>
  );
}

export default function CollisionsSection() {
  return (
    <section
      aria-labelledby="collisions-heading"
      className="bg-black py-16 md:py-24 px-4 md:px-10 border-t border-white/10"
    >
      <div className="max-w-[1100px] mx-auto">
        <h2
          id="collisions-heading"
          className="text-4xl md:text-6xl font-extrabold leading-none mb-8"
        >
          Collisions
        </h2>
        <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-[62ch] mb-12 md:mb-16">
          {COLLISIONS_INTRO}
        </p>

        <ol role="list" className="border-b border-white/15">
          {COLLISIONS.map((c) => (
            <li
              key={c.number}
              className="border-t border-white/15 py-10 md:py-14 md:grid md:grid-cols-[160px_1fr] md:gap-8"
            >
              <span
                aria-hidden="true"
                className="block font-mono text-6xl md:text-8xl font-bold leading-none text-gray-500 mb-4 md:mb-0"
              >
                {c.number}
              </span>
              <div>
                <h3 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6">
                  <Title title={c.title} />
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-[62ch]">
                  {c.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <CollisionsSignup />
      </div>
    </section>
  );
}
