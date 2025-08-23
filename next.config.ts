import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: ['removeDimensions'],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
}

export default nextConfig
