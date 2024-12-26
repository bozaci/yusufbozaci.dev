/* eslint-disable */
import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'yusufbozaci.dev',
      },
    ],
  },

  webpack(config) {
    // disable css-module in Next.js
    // source: https://cwtuan.blogspot.com/2022/10/disable-css-module-in-nextjs-v1231-sept.html
    config.module.rules.forEach((rule: { oneOf: any }) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one: { issuer: { and: any[] } }) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    return config;
  },
};

export default nextConfig;
