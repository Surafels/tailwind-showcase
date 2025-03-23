import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "", // Leave empty if no specific port is required
        pathname: "/api/portraits/**", // Match all images under this path
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty if no specific port is required
        pathname: "/**", // Match all images under this path
      },
    ],
  },
};

export default nextConfig;