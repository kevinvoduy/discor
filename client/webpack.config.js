const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
require('dotenv').config();

const devMode = process.env.NODE_ENV !== 'production';

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
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'NEWS_API_KEY': JSON.stringify(process.env.NEWS_API_KEY),
        'DEV_REST': JSON.stringify(process.env.DEV_REST),
        'PRO_REST': JSON.stringify(process.env.PRO_REST),
        'DEV_POST': JSON.stringify(process.env.DEV_POST),
        'PRO_POST': JSON.stringify(process.env.PRO_POST),
        'DEV_SOCK': JSON.stringify(process.env.DEV_SOCK),
        'PRO_SOCK': JSON.stringify(process.env.PRO_SOCK),
        'MONGO_USER': JSON.stringify(process.env.MONGO_USER),
        'MONGO_PW': JSON.stringify(process.env.MONGO_PW),
      }
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin([
      { from: 'public/assets', to: 'assets' }
    ]),
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production' ? true : false,
    mergeDuplicateChunks: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: false,
  stats: {
    children: false
  },
  performance: {
    hints: false,
  },
};
