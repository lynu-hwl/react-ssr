const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader",]
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.LoaderOptionsPlugin({
      options: {
        derServer: {
          contentBase: path.resolve(__dirname, 'build'),
          port: 9000,
          compress: true,
          open: true
        }
      }
    }),
  ],
}