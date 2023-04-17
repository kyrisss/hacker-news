/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) =>
  merge(config(env), {
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    output: {
      chunkFilename: "[name].[contenthash].bundle.js",
      filename: "[name].[contenthash].bundle.js",
      publicPath: "/",
    },
    optimization: {
      runtimeChunk: "single",
      minimizer: ["...", new CssMinimizerPlugin()],
    },
    plugins: [
      new CompressionPlugin({
        filename: "[path][base].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new MiniCssExtractPlugin(),
      new BundleAnalyzerPlugin(), // Uncomment to check bundle size
    ],
  });
