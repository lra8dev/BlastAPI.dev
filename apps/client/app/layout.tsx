import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/global/theme-provider";
import { inter, jetbrains, orbitron } from "@/config/fonts";
import { QueryProvider } from "@/lib/react-query";
import { SonnerProvider } from "@/lib/sonner";

export const metadata: Metadata = {
  title: "API Overload — Because APIs need stress too!",
  description: "API Overload is a stress testing tool for APIs, built with Next.js and TypeScript.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

const RootLayout = ({ children }: RootProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <SonnerProvider>{children}</SonnerProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
