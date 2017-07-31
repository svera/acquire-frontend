var webpack = require("webpack");
var path = require("path");
var CompressionPlugin = require("compression-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "build");
var APP_DIR = path.resolve(__dirname, "frontend");

var config = {
  devtool: "cheap-module-source-map",     
  entry: APP_DIR + "/app.jsx",
  output: {
    path: BUILD_DIR,
    publicPath: "build",    
    filename: "bundle.[hash].js",
    chunkFilename: "bundle.[hash]js"
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
    new webpack.DefinePlugin({ // <-- key to reducing React"s <size></size>
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      debug: false,
      compressor: {
        warnings: false
      }     
    }),
    new CompressionPlugin({   //<-- Add this
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      template: "template/index.ejs",
      filename: "../index.html"
    })       
  ]  
};

module.exports = config;
