/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port:'',
        hostname: "utfs.io",
        pathname:"/f/**"
      }
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    experimental: {
      esmExternals: "loose", 
      serverComponentsExternalPackages: ["mongoose"],
      serverActions:true
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
      },

      
    

  }


   
  export default nextConfig