const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(
        (plugin) => plugin.constructor.name === "CssMinimizerPlugin"
      );
      
      if (minimizerIndex !== -1) {
        webpackConfig.optimization.minimizer.splice(minimizerIndex, 1);
      }
      
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      mode: "file",
    },
  },
};
