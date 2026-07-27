import type { NextConfig } from "next";

/**
 * Allow next/image to serve media from the headless WordPress host.
 * Dev entries are hardcoded (any local port — LocalWP assigns them);
 * the env-derived entry covers the hosted WordPress in production.
 */
const wpHost = process.env.WORDPRESS_API_URL
  ? new URL(process.env.WORDPRESS_API_URL)
  : null;

const remoteWpPattern =
  wpHost && !["localhost", "127.0.0.1"].includes(wpHost.hostname)
    ? [
        {
          protocol: (wpHost.protocol === "https:" ? "https" : "http") as
            | "https"
            | "http",
          hostname: wpHost.hostname,
          ...(wpHost.port ? { port: wpHost.port } : {}),
        },
      ]
    : [];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "cms.theautonomycode.com" },
      ...remoteWpPattern,
    ],
    // Next 16 blocks optimizing images from private IPs (SSRF guard).
    // LocalWP serves media from localhost, so allow it ONLY while the
    // WordPress host is local; a hosted WP (production) turns this off.
    dangerouslyAllowLocalIP:
      !wpHost || ["localhost", "127.0.0.1"].includes(wpHost.hostname),
  },
};

export default nextConfig;
