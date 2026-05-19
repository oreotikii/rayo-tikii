const projectRoot = new URL(".", import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot
  },
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
