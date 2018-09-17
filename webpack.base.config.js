const path = require("path");

module.exports = {
  context: __dirname,

  entry: "./frontend/index.jsx",

  output: {
    path: path.resolve("./frontend/bundles/"),
    filename: "[name]-[hash].js",
  },

  plugins: [
  ],

  module: {
    rules: [
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
          "url-loader",
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};

