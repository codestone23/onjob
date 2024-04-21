/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
  compiler: {
    styledComponents: true,
  },
  images: { domains: ['robohash.org'] },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://660d2bd96ddfa2943b33731c.mockapi.io/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
