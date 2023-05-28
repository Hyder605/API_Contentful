/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "Your contentful space Id",
    CONTENTFUL_ACCESS_KEY: "Your API KEY"
  },
}

module.exports = nextConfig
