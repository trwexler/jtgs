/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jesusthegoodshepherd.org", "pexels.com","myconfig.com"],
    formats: ['image/avif', 'image/webp'],
  },

}



module.exports = nextConfig
