import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16.3 Instant Navigations: explicit client-side caching
  // and partial prefetching for SPA-like navigation speed.
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
