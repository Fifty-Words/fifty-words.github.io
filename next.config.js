console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_V4_MEASUREMENT_ID);

module.exports = {
  reactStrictMode: true,
  assetPrefix: '/',

  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_V4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_V4_MEASUREMENT_ID,
    GOOGLE_REPORTING_V4_API_KEY: process.env.GOOGLE_REPORTING_V4_API_KEY,
  },

  // support importing SVGs
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
}
