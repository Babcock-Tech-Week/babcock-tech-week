import type { Metadata } from "next";
import { Google_Sans, Archivo, Kode_Mono } from "next/font/google";
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

// 2027 typefaces (Dotun's creative direction): Archivo primary, Kode Mono secondary.
// Google Sans stays loaded because the /2026 archive still uses it.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
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
      <body className={`${googleSans.variable} ${archivo.variable} ${kodeMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
