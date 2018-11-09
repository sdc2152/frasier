const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./frontend/index.jsx"
  ],
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve("frontend/bundles/"),
    publicPath: "http://localhost:3000/frontend/bundles/"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: "./webpack-stats.json"}),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: [
            "react-hot-loader/babel",
            "dynamic-import-webpack",
          ],
          presets: ["env", "react"]
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          "file-loader",
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  devtool: "inline-source-map"
};

