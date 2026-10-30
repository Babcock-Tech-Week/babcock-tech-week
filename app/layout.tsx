import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./fonts.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Babcock Tech Week | 22-29 March 2026",
  description:
    "Babcock Tech Week 2026, 22-29 March 2026, at Babcock University. Organised by the Babcock University Computer Club (BUCC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
