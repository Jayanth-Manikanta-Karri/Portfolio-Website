const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = isGitHubActions || (isProd && process.env.GITHUB_PAGES === 'true');
const basePath = isGitHubPages ? '/Portfolio-Website' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
