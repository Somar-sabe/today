/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "new-projects-media.propertyfinder.com",
      },
      {
        protocol: "https",
        hostname: "bnw.ae",
      },
      // إذا عندك صور من أي CDN ثاني ضيفه هون
    ],
  },
};

module.exports = nextConfig;