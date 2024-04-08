/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "rotang.ua" }, { hostname: "plchldr.co" }, { hostname: "localhost" }],
  },
};

export default nextConfig;
