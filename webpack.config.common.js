const webpack = require('webpack');
const path = require('path');

const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

const plugins = [
  new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin()
]

const rules = [
  {
    test: /\.(js|jsx)?$/,
    loader: 'babel-loader',
    exclude: '/node_modules/'
  }
]

const resolve = {
  modules: [
    "node_modules",
    ".."
  ]
}

const devtool = 'cheap-module-eval-source-map';


module.exports = {
	output,
	plugins,
	module: { rules },
  devtool,
  resolve
}