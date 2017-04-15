const path = require('path')
const BundleSummary = require('../webpack-bundle-summary/lib/index.js')
const shouldHash = false
const webpack = require('webpack')

var getFilename = function (extension) {
  if (shouldHash) {
    return '[name].[chunkhash].' + extension
  }
  return '[name].' + extension
}

var config = {
  output: {
    path: path.resolve(__dirname, 'public', 'bundle'),
    publicPath: '/public/bundle/',
    filename: getFilename('js')
  },
  entry: './js/entry.js',
  module: {
    rules: [
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({children: true, async: true, filename: 'async-commons.js'}),
    new BundleSummary()
  ],
  devtool: 'source-map'
}

module.exports = config
