/** @type {import('next').NextConfig} */
const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",
}

const nextConfig = {
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', 'scontent-bos5-1.cdninstagram.com', 'scontent-lga3-2.cdninstagram.com' ],
  },
  async redirects() {
    return [
      {
        source: '/wp-admin',
        destination: '/admin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
