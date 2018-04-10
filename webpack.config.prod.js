const common = require('./webpack.config.common');
const config = require('./config/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


common.entry = {
  app: ['babel-polyfill', path.resolve(__dirname, config.APP_ENTRY_POINT)],
};

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'test Prod',
  template: `src/index.html`,
  inject: 'body',
  filename: 'index.html',
})

const webpackProdOutput = {
  publicPath: './',
  filename: 'assets/[name]-[hash].js',
  chunkFilename: "assets/[id].[hash].js",
};

common.output = Object.assign(common.output, webpackProdOutput);

common.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    },
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  
  // how you want your code to be optimized
  // all configurable
  new webpack.IgnorePlugin(/un~$/),
  
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: 'assets/common-[hash].js'
  })
);
common.plugins = common.plugins.concat(htmlPlugin);

module.exports = common;