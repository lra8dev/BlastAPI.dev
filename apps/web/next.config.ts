import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  // This creates a minimal production build
  output: "standalone",

  // Optimize for production
  poweredByHeader: false,

  // Enable experimental features if needed
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
};

export default nextConfig;
