import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Rayo - Digital Agency & Personal Portfolio",
  description:
    "A Next.js rebuild of the Rayo digital agency and personal portfolio template.",
  icons: {
    icon: [
      { url: "/img/favicon/favicon.ico", sizes: "any" },
      { url: "/img/favicon/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/img/favicon/apple-touch-icon.png"
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    title: "Rayo - Digital Agency & Personal Portfolio",
    description:
      "Dynamic and stylish creative agency and portfolio experience rebuilt in Next.js.",
    images: ["/img/og-image.jpg"]
  }
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("template.theme");
    const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F6" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#161616" />
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
