/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "rotang.ua" }, { hostname: "localhost" }, { hostname: "178.54.240.228" }],
  },
};

export default nextConfig;
