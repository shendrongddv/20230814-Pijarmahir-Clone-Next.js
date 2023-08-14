import "./globals.css";
import type { Metadata } from "next";
import { Montserrat as FontDisplay, Inter as FontBody } from "next/font/google";

import { cn } from "@/lib/utils";

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = FontBody({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Pijar Mahir",
  description:
    "Platform pembelajaran digital tersertifikasi, mitra platfrom resmi untuk Kartu Prakerja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-body antialiased",
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
