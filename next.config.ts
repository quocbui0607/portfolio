import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["geist"],
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: ["@headlessui/react", "lodash", "hugeicons-react"],
  },
   redirects: async ()  => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      }
    ]}
};

export default nextConfig;
