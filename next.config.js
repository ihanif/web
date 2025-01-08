const withNextTranslate = require('next-translate-plugin')
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for react/jsx-runtime issue
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react/jsx-runtime.js': 'react/jsx-runtime',
        'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime'
      }
    }
    
    return config
  }
}

// Combine the plugins
module.exports = withNextTranslate(withMDX(nextConfig))
