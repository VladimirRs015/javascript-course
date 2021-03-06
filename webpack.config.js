const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const a = require("file-loader");

const FileLoader = require("file-loader");
module.exports = (env, argv) => {
  const isDevelopment = argv.mode ? true : false;
  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: `[name].[${isDevelopment ? "hash" : "contenthash"}].bundle.js`,
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    optimization: {
      splitChunks: {
        maxSize: 100000,
        cacheGroups: {
          defaultvendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
        },
      },
    },
    devtool: isDevelopment ? "eval-cheap-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.s?css/,
          use: [
            {
              loader: miniCSSExtractPlugin.loader,
              options: {
                hmr: true,
                reloadAll: true,
              },
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.mp4/,
          use: 'file-loader',
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        title: "Proyecto",
        template: "./src/assets/index.html",
      }),
      new miniCSSExtractPlugin(),
      new CleanWebpackPlugin(),
    ],
  };
};
