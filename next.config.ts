import type { NextConfig } from "next";
// import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // webpackDevMiddleware: (config: Configuration) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
  env: {
    endpointGrapql : 'https://graphql-pokemon2.vercel.app'
  }
};

export default nextConfig;
