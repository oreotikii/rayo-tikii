import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://tikii.in"),
  title: "Tikii - Trusted Digital Agency in Kolkata",
  description:
    "Tikii Marketing Services LLP is a Kolkata-based branding, marketing, website, and digital strategy agency.",
  icons: {
    icon: [
      { url: "/img/tikii/tikii-favicon.svg", type: "image/svg+xml" },
      { url: "/img/favicon/favicon.ico", sizes: "any" }
    ],
    apple: "/img/tikii/tikii-favicon.svg"
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    title: "Tikii - Trusted Digital Agency in Kolkata",
    description:
      "Branding, marketing, websites, performance, content, and digital experiences from Tikii.",
    images: ["/img/og-image.jpg"]
  }
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("template.theme");
    const theme = stored || "light";
    document.documentElement.setAttribute("color-scheme", theme);
  } catch (_) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F4F4F0" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
        <link rel="stylesheet" href="/css/loaders/loader.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/next-overrides.css" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
