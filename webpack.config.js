var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "public/build");
var APP_DIR = path.resolve(__dirname, "frontend");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  devtool: "eval-source-map", 
  entry: APP_DIR + "/app.jsx",
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "bundle.js"
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        loader: "babel-loader",
        include : APP_DIR,
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template/index.ejs",
      filename: "index.html"
    })       
  ]    
};

module.exports = config;
