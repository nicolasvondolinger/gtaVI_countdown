const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['www.youtube.com'],
  },
  basePath: isGithubPages ? '/gtavi_countdown' : '',
  assetPrefix: isGithubPages ? '/gtavi_countdown/' : '',
};

module.exports = nextConfig;
