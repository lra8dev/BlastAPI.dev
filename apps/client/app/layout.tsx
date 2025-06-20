import "./globals.css";

import type { Metadata } from "next";

import { inter, jetbrains, orbitron } from "@/config/fonts";
import { QueryProvider } from "@/lib/react-query";
import { SonnerProvider } from "@/lib/sonner";

export const metadata: Metadata = {
  title: "API Overload — Because APIs need stress too!",
  description: "API Overload is a stress testing tool for APIs, built with Next.js and TypeScript.",
};

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable} antialiased`} // TODO: add dark mode
      >
        <QueryProvider>
          <SonnerProvider>{children}</SonnerProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
