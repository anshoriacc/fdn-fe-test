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
      {
        protocol: 'https',
        hostname: 'imgcdn.femaledaily.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
