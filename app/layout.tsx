import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./fonts.css";
import { SITE_URL, EVENT_TITLE, EVENT_DESCRIPTION } from "./lib/site";
import { pageMetadata } from "./lib/seo";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ title: EVENT_TITLE, description: EVENT_DESCRIPTION, path: "/" }),
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
