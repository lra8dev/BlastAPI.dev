import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { inter, jetbrains } from "@/config/fonts";
export { metadata } from "@/config/metadata";
export { viewport } from "@/config/viewport";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/provider/react-query";
import { SonnerProvider } from "@/provider/sonner";
import { ThemeProvider } from "@/provider/theme";
import { LayoutProps } from "@/types";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.variable, jetbrains.variable)}>
        <SessionProvider>
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
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
