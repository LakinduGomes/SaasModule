/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export (creates out/)
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;
