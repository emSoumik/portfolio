/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  // Add webpack configuration for video files only
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]',
          publicPath: `${process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'}`,
          quality: 100,
          limit: 1024 * 1024 * 10,
        },
      },
    });
    return config;
  },
};

export default nextConfig;
