import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    unoptimized: true,
  },

  
  experimental: {
    reactCompiler: false, // keep disabled if using React 19 features
  },

  
  output: "standalone",
};

export default nextConfig;
