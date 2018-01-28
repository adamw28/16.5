var HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})]