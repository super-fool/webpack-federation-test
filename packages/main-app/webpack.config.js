const htmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// use follow statement
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');



module.exports = {
  mode: "development",
  cache: false,

  entry: "./src/main",
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },


  devtool: "source-map",

  optimization: {
    minimize: false,
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
      name: "main_app",
      filename: "mainApp.js",
      exposes: {
        "./Home": "./src/views/Home.js"
      },
      remotes: {
        'longfor_ui': 'longfor_ui@http://localhost:3002/longforUI.js'
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