const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

let config = require("./webpack.base.config.js");

config.mode = "development";

config.entry = [
  "webpack-dev-server/client?http://localhost:3000",
  "webpack/hot/only-dev-server",
  "./frontend/index.jsx"
];

config.output.publicPath = "http://localhost:3000/frontend/bundles/";

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new BundleTracker({filename: "./webpack-stats.json"}),
];

config.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      plugins: ["react-hot-loader/babel"],
      presets: ["env", "react"]
    },
  }
);

module.exports = config;
