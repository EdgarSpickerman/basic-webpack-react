const path = require("path");
const htmlWebpack = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname,"./client/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname,"./dist"),
    compress: true,
    hot: true,
    open: true,
    proxy: {
      "/Api": "http://localhost:3000"
    }
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ {loader: "babel-loader"} ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ {loader: "babel-loader"} ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ {loader: "file-loader"} ]
      }
    ]
  },
  plugins:[
    new htmlWebpack({
      template: path.join(__dirname,"./client/index.html"),
      filename: "index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}