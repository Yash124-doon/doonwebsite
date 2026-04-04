/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for cPanel deployment
  output: 'export',
  trailingSlash: true,

  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Note: headers() and redirects() are NOT supported with output: 'export'
  // These are now handled via .htaccess file on the server
};

module.exports = nextConfig;

