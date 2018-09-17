const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

let config = require("./webpack.base.config.js");

config.mode = "production";

config.output = {
  path: path.resolve("./frontend/dist/"),
  filename: "[name]-[hash].js",
};

config.plugins = config.plugins.concat([
  new BundleTracker({filename: "./webpack-stats-prod.json"}),
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production"),
    },
  }),
]);

config.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets: ["env", "react"]
    },
  }
);

module.exports = config;
