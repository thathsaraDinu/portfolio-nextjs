import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",

  // Optionally, if you are using a custom base path (for example, if your GitHub Pages site is a subdirectory),
  // you can add a `basePath` setting
  basePath: "", // Specify a base path if necessary, or leave it as '' for root

  // Optional: Disable Image Optimization since GitHub Pages won't support Next.js's image optimization
  images: {
    unoptimized: true,
    domains: ["example.com", "anotherdomain.com"], // Add the external domains you want to load images from
  },

  // Additional Next.js configuration options can be added here
};

export default nextConfig;
