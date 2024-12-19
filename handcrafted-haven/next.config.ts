import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode (optional)
  swcMinify: true, // Enable SWC-based minification (optional)
  
  // Example: Add a custom Webpack config (if necessary)
  webpack(config) {
    // Customize Webpack here (if needed)
    return config;
  },

  // Example: Add support for environment variables
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://api.example.com', // Example env variable
  },
};

export default nextConfig;
