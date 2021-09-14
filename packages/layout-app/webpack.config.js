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
      name: "longfor_ui",
      filename: "longforUI.js",
      exposes: {
        "./Layout": "./src/index",
        "./component": './src/components/index'
      },
      remotes: {
        'main_app': 'main_app@http://localhost:3001/mainApp.js'
      },
      shared: ['react', 'react-dom'],
      // shared: {
      //   react: {
      //     // eager: true,
      //     singleton: true,
      //   },
      //   "react-dom": {
      //     // eager: true,
      //     singleton: true,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};