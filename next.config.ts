import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for hosting on static providers like Hostinger
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure proper asset prefix for static hosting
  assetPrefix: '',
  
  // External packages for server components (moved from experimental)
  serverExternalPackages: []
};

export default nextConfig;
