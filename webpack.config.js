const path = require('path')
const BundleSummary = require('webpack-bundle-summary')
const shouldHash = false

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
    new BundleSummary({
      filter: (assetName) => /\.js$/.test(assetName)
    })
  ],
  devtool: 'source-map'
}

module.exports = config
