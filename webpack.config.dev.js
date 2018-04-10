const common = require('./webpack.config.common');
const config = require('./config/index');
const merge = require('webpack-merge');
const htmlPlugin = require('html-webpack-plugin');


const entry = [
  `webpack-dev-server/client?${config.APP_HOST}:${config.port}`,
  'webpack/hot/only-dev-server',
  `./src/router.js`,
]

const devServer = {
	contentBase: './dist',
	hot: true,
  port: config.port,
	compress: true,
}

const htmlWebPackPlugin = new htmlPlugin({
  template: './src/index.html',
  title: 'my first app',
  inject: 'body',
  filename: 'index.html'
});

const plugins = common.plugins.concat(htmlWebPackPlugin);

common.plugins = plugins;
common.devServer = devServer;
common.entry = entry;
console.log(entry)
module.exports = common;