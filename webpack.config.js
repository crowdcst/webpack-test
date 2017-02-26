const path = require('path')

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
  devtool: 'source-map'
}

module.exports = config

