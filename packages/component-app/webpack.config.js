const HtmlWebpackPlugin = require('html-webpack-plugin')
// const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// use follow statement
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: "./src/index",

  output: {
    publicPath: "http://localhost:3002/",
  },

  mode: "development",
  cache: false,

  devtool: "source-map",

  optimization: {
    minimize: false,
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "longfor-ui",
      filename: "longforUI.js",
      exposes: {
        "./components": "./src/components/index",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};