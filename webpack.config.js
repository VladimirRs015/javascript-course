const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env, argv) => { 
  return {
    mode : 'development',
    entry: "./src/index.js",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    devtool : 'source-map',
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            {
              loader: miniCSSExtractPlugin.loader,
              options : {
                  hmr : true,
                  reloadAll : true 
              }
            },
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        title: "Proyecto",
        template: "./src/assets/index.html",
      }),
      new miniCSSExtractPlugin(),
    ],
  };
};
