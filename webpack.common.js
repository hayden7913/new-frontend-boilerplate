const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Wepack App',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
