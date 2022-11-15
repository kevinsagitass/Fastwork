const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ["index", "todo", "recap", "tips", "calendar"]

module.exports = {
  mode: "none",
  entry: pages.reduce(
    (config, page) => {
      config[page] = `./src/${page}.js`;
      return config;
    },
    {}
  ),
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
