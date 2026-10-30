import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./fonts.css";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./lib/constants";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  // TODO: add openGraph/twitter share image (1200x630) once the poster is supplied.
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Babcock Tech Week",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
