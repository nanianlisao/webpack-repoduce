const HtmlWebpackPlugin = require("html-webpack-plugin");
const { library } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devServer: {
    client: {
      overlay: false,
    },
  },
  experiments: {
    lazyCompilation: true,
  },
  output: {
    library: {
      name: "demo",
      type: "umd",
    },
  },
  externals: {
    react: "React",
    antd: "antd",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./document.html",
    }),
  ],
};
