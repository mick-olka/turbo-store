/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "rotang.ua" }, { hostname: "localhost" }],
  },
};

export default nextConfig;
