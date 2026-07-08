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
