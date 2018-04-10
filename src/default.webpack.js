/**
 * Created by dileepkumar on 4/9/18.
 */
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let WebPackConfig = {
  devServer: {
    contentBase: "./dist",
    port: 9000,
    hot: true,
  },
  resolve: {
    modules: [
      "node_modules",
      ".."
    ]
  },
  entry: [
    `webpack-dev-server/client?http://localhost:9000`,
    'webpack/hot/only-dev-server',
    `./src/router.js`,
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
  
}

const htmlPlugins = new HtmlWebpackPlugin({
  title: 'My First App',
  template: `src/index.html`,
  inject: 'body',
  filename: 'index.html',
})

const HotModuleReplacePlugin = new webpack.HotModuleReplacementPlugin();

WebPackConfig.devtool = 'cheap-module-eval-source-map';

WebPackConfig.plugins = WebPackConfig.plugins.concat(htmlPlugins, HotModuleReplacePlugin);

module.exports = WebPackConfig;

/**
 * Created by dileepkumar on 4/10/18.
 */
