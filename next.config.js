/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.femaledaily.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
