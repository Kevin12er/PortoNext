import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Enable transpilation for broader browser compatibility
  transpilePackages: ["lucide-react", "simple-icons"],
};

export default nextConfig;
