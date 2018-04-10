const common = require('./webpack.config.common');
const config = require('./config/index');
const merge = require('webpack-merge');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = [
  `webpack-dev-server/client?http://localhost:9000`,
  'webpack/hot/only-dev-server',
  `./src/router.js`,
]

const devServer = {
  contentBase: "./dist",
  port: 9000,
  hot: true,
}

const htmlWebPackPlugin = new htmlPlugin({
  template: './src/index.html',
  title: 'my first app',
  filename: 'index.html'
});

const textPlugin = new ExtractTextPlugin('style.css');

common.plugins = common.plugins.concat(htmlWebPackPlugin, textPlugin);
common.devServer = devServer;
common.entry = entry;

const lessRules = {
  test: /\.less?$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader!less-loader'
  })
}

common.module.rules = common.module.rules.concat([lessRules])

module.exports = common;