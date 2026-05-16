import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7F6' },
    { media: '(prefers-color-scheme: dark)', color: '#161616' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mixdesign.dev/themeforest/rayo'),
  title: 'Rayo - Digital Agency & Personal Portfolio Template',
  description:
    'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
  keywords: [
    'portfolio',
    'personal',
    'agency',
    'creative',
    'template',
    'responsive',
    'html5',
    'css3',
  ],
  openGraph: {
    title: 'Rayo - Digital Agency & Personal Portfolio Template',
    description:
      'Elevate your digital presence with Rayo - dynamic and stylish template designed for creative agencies and personal brands.',
    url: 'https://mixdesign.dev/themeforest/rayo',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 1200 }],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/img/favicon/favicon.ico', sizes: 'any' },
      { url: '/img/favicon/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/img/favicon/apple-touch-icon.png',
  },
  manifest: '/img/favicon/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
        <Script src="/js/libs.min.js" strategy="beforeInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
