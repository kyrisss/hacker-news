const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = (env) =>
  merge(config(env), {
    mode: "development",
    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      historyApiFallback: true,
    },
    output: {
      filename: "[name].[contenthash].bundle.js",
      chunkFilename: "[name].[contenthash].bundle.js",
      publicPath: "/",
    },
    plugins: [
    ],
  });
