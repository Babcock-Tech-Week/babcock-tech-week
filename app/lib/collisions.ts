export type Collision = {
  number: string;
  title: string;
  summary: string;
};

export const COLLISIONS_INTRO =
  "Friction is this year's theme, so we built the week's main sessions around industry collisions, not industry lessons. In each one, two professionals whose fields genuinely disagree sit at opposite ends of a table in a dark room, facing each other and not you, with a moderator stoking the flames. There are no interruptions. Watch people who run industries argue personally, right up to the edge of shouting, and leave thoroughly educated on both sides. Deciding who's right and who's wrong is your job.";

// Days and names get added here as they are announced (lineup: January).
// TODO: the final question in 04 is a replacement for "who are you making this for?" and is pending Kachi's approval.
export const COLLISIONS: Collision[] = [
  {
    number: "01",
    title: "Human vs. System",
    summary:
      "We put a person who builds and runs a system that decides who works, who gets in and who gets left out, in front of someone it has already left out.",
  },
  {
    number: "02",
    title: "Build vs. Regulate",
    summary:
      "We put a serial builder, a true innovator who finds a gap and exploits it, in front of the person meant to say 'no no, you can't do that'.",
  },
  {
    number: "03",
    title: "Speed vs. Substance",
    summary:
      "We put someone who builds fast, gets the first version out and fixes it in public, in front of someone whose job depends on it being flawless before anyone touches it. Each has to explain why the other is wrong.",
  },
  {
    number: "04",
    title: "Art vs. Algorithm",
    summary:
      "Do you make what's true to you, or what performs well for the algorithm? We put someone who creates because the work has to exist in front of someone who creates because it sells and gets views, and ask both: would you still make it if nobody was watching?",
  },
];
