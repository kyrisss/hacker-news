/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DefinePlugin = require("webpack").DefinePlugin;
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

module.exports = (env) => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + "/.env";
  const envPath = basePath + "." + env.goal;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.s(a|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(ico|png|jpe?g|gif|svg|mp3)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".mjs", ".js"],
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@constants": path.resolve(__dirname, "src/constants/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@models": path.resolve(__dirname, "src/models/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@redux": path.resolve(__dirname, "src/redux/"),
        "@routes": path.resolve(__dirname, "src/routes/"),
        "@views": path.resolve(__dirname, "src/views/"),
        "@styles": path.resolve(__dirname, "styles/"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      compress: true,
      port: 3000,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
    ],
  };
};
