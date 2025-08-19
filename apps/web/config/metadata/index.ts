import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "BlastAPI — Free Load & Performance Testing for Modern APIs",
    template: "%s | BlastAPI",
  },
  description:
    "BlastAPI is a developer-first API testing platform offering high-performance load tests, insightful metrics, and a beautiful UI — completely free to use. Whether you're testing a REST API or preparing for scale, BlastAPI lets you push your backend to the edge.",
  keywords: [
    "API testing",
    "load testing",
    "performance testing",
    "developer tools",
    "REST API",
    "API monitoring",
  ],
  authors: [{ name: "Laxman Rathod", url: "https://github.com/lra8dev" }],
  creator: "Laxman Rathod",
  publisher: "Laxman Rathod",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/assets/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blastapi.dev", // TODO: Update with actual URL
    siteName: "BlastAPI",
    title: "BlastAPI — Free Load & Performance Testing for Modern APIs",
    description:
      "BlastAPI is a developer-first API testing platform offering high-performance load tests, insightful metrics, and a beautiful UI — completely free to use.",
    images: [
      {
        url: "/assets/android-chrome-192x192.png", // TODO: update with actual URL
        width: 1200,
        height: 630,
        alt: "BlastAPI - API Load Testing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlastAPI — Free Load & Performance Testing for Modern APIs",
    description:
      "BlastAPI is a developer-first API testing platform offering high-performance load tests, insightful metrics, and a beautiful UI — completely free to use.",
    images: ["/assets/android-chrome-192x192.png"], // TODO: update with actual URL
    creator: "@luckyrathod__",
  },
};
