/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    experimental: {
      esmExternals: "loose", 
      serverComponentsExternalPackages: ["mongoose"] 
    },
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      webpack: (config) => {
        config.experiments = {
          topLevelAwait: true
        };
        return config;
      }
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,

  }


   
  export default nextConfig