import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "7LIFE — Van inzicht naar impact",
  description:
    "7LIFE helpt mensen, teams en organisaties begrijpen wat er werkelijk speelt — en in beweging komen. Niet incidenteel. Structureel.",
  metadataBase: new URL("https://www.7life.nl"),
  openGraph: {
    title: "7LIFE — Van inzicht naar impact",
    description:
      "7LIFE helpt mensen, teams en organisaties begrijpen wat er werkelijk speelt — en in beweging komen. Niet incidenteel. Structureel.",
    url: "https://www.7life.nl",
    siteName: "7LIFE Nederland",
    images: [
      {
        url: "/logo-badge.png",
        width: 800,
        height: 800,
        alt: "7LIFE Nederland",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "7LIFE — Van inzicht naar impact",
    description:
      "7LIFE helpt mensen, teams en organisaties begrijpen wat er werkelijk speelt — en in beweging komen.",
    images: ["/logo-badge.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${fraunces.variable} ${dmSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
