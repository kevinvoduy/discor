const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]',
              publicPath: 'assets/',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: false,
  performance: {
    hints: false,
  },
}
