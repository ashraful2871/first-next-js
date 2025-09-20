import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://i.ibb.co.com/CKLzcgBZ/1d3be7c1e1ced139f15f0f372d430eac.jpg"
      ),
    ],
  },
};

export default nextConfig;
