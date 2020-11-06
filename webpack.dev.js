var path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
var webpack = require("webpack");

require("dotenv").config({ path: ".env.dev" });

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
    filename: "index_bundle.js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss|css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    contentBase: path.join(__dirname, "public"),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
