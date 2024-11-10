// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 's3.menucool.com',
            port: '',
        
          },
        ],
  }
}
   
  module.exports = nextConfig;