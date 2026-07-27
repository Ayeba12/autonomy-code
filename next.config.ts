import type { NextConfig } from "next";

/** Allow next/image to serve media from the headless WordPress host. */
const wpHost = process.env.WORDPRESS_API_URL
  ? new URL(process.env.WORDPRESS_API_URL)
  : null;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: wpHost
      ? [
          {
            protocol: wpHost.protocol === "https:" ? "https" : "http",
            hostname: wpHost.hostname,
          },
        ]
      : [],
  },
};

export default nextConfig;
