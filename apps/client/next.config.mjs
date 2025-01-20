/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "rotang.ua" },
      { hostname: "localhost" },
      { hostname: "178.54.240.228" },
      { hostname: "109.248.232.62" },
    ],
  },
};

export default nextConfig;
