/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  typescript: {
    // Set to false for production builds to abort if there are type errors
    // ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
    ignoreBuildErrors: false,
  },
  eslint: {
    /// Set to false for production builds to abort if there are lint errors
    // ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
