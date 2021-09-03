const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require()


const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",

  output: {
    publicPath: "http://localhost:3001/",
  },

  mode: "development",
  cache: false,

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
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new CopyPlugin([{ from: "assets", to: "assets" }]),
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        nav: "nav@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./ProductCarousel": "./src/ProductCarousel",
        "./fruit": "./src/fruit",
        "./ProductCard": "./src/ProductCard",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};