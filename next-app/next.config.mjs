/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com"
      },
      {
        protocol: "https",
        hostname: "mixdesign.dev"
      }
    ]
  }
};

export default nextConfig;
