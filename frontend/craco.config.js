const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Nuclear option - disable ALL optimization
      webpackConfig.optimization.minimize = false;
      webpackConfig.optimization.minimizer = [];
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      mode: "file",
    },
  },
};
