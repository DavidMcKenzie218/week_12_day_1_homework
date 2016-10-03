var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({
    title: "films",
    filename: "index_html.html"
  })]
}

module.exports = config;