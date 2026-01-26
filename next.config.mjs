/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
}

export default nextConfig