const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: join(__dirname, "src/app.js"),
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundled.js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 8000,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: ["vue-style-loader", "css-loader"] },
      {
        test: /\.s(a|c)ss$/,
        loader: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.(png|jpg|gif|svg)$/i, loader: "file-loader" },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, "src/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};
