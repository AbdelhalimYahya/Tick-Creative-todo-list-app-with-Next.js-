import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      allowedOrigins: ["http://localhost:3000", "https://example.com"],
    },
  },
};

export default nextConfig;
