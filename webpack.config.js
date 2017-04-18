const path = require('path')
const BundleSummary = require('webpack-bundle-summary')
const shouldHash = false
const shouldAnalyze = process.env.ANALYZE === 'true'
let BundleAnalyzerPlugin
if (shouldAnalyze) {
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
}
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
    new webpack.optimize.CommonsChunkPlugin({children: true, async: true}),
    new BundleSummary()
  ],
  devtool: 'source-map'
}

if (shouldAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
