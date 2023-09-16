import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
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
