var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RouteManifest = require("webpack-route-manifest");

module.exports = {
  entry: ["babel-polyfill", "./app/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.PORT": JSON.stringify(process.env.PORT),
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
    }),
    new RouteManifest({
      routes: {
        "./components/Modal": "/modal",
        "./components/Settings": "/settings",
      },
    }),
  ],
};
