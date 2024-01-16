//ANALYZE=true npm run build

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ja",
        permanent: true,
      },
    ];
  },
});
