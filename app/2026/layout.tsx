import type { Metadata } from "next";

// TODO (Phase C): flip robots to indexable when the 2027 home page goes live.
// TODO (Phase C): add the "archived edition" banner and the redirects for /2026.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.babcocktechweek.com"),
  robots: { index: false, follow: false },
};

export default function Archive2026Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
