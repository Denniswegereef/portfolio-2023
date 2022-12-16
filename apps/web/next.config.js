module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack(config, { isServer }) {
  //   // Allow importing of shader files (e.g. `.glsl` -- filenames below)
  //   // @see: https://github.com/glslify/glslify-loader
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs|vert|frag|ps)$/,
  //     exclude: /node_modules/,
  //     use: ['raw-loader', 'glslify-loader'],
  //   })

  //   return config
  // },
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "source.unsplash.com" },
    ],
  },

  experimental: {
    transpilePackages: ["ui"],
  },
};
