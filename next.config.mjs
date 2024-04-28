/**
 * @type {((config: import("next").NextConfig) => import("next").NextConfig)[]}
 */
const plugins = [];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // /** Enables hot reloading for local packages without a build step */
  // transpilePackages: ["antd"],
  pageExtensions: ["ts", "tsx", "mdx"],
  // experimental: {
  //   appDir: true,
  // },
  // Allow optimizing avatar images from GitHub
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.github.com",
      },
    ],
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },

  /** We already do linting and type-checking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
};

const defaultExport = () =>
  plugins.reduce((acc, next) => next(acc), nextConfig);
export default defaultExport();
