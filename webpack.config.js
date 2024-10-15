const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    filename: "index.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader"],
      },
    ],
  },
};
