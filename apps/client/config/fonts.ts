import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";

// For Headings and Titles
export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// For Body Text
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// For Code Blocks and Monospaced Text
export const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains", // TODO: Check if this is correct
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
