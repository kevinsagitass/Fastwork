const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "~": path.resolve(__dirname, "../src"),
      handlebars: "handlebars/dist/handlebars.min.js",
    },
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      assert: false,
      async_hooks: false,
    },
  },
  devtool: "inline-source-map",
  entry: {
    server: "./src/server.js",
    index: "./src/index.js",
    recap: "./src/recap.js",
    tips: "./src/tips.js",
    todo: "./src/todo.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  externals: [{ express: "express" }],
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/calendar.html",
      filename: "./calendar.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/recap.html",
      filename: "./recap.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/tips.html",
      filename: "./tips.html",
    }),
    new HtmlWebPackPlugin({
      template: "./src/todo.html",
      filename: "./todo.html",
    }),
  ],
  devServer: {
    port: 3001,
  },
};
