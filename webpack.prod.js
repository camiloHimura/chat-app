var path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "public"),
    filename: "static/js/[name].[contenthash:8].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    chunkFilename: "[name].[contenthash:8].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
