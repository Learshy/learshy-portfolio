const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? "/learshy-portfolio" : "",
  assetPrefix: isGitHubPages ? "/learshy-portfolio/" : "",
  poweredByHeader: false,
  reactStrictMode: true
};

module.exports = nextConfig;
