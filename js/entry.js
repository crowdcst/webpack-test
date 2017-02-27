require('./a')
console.log('i am entry outside')
require.ensure(['./c'], function (require) {
  require('./b')
  console.log('i am entry inside')
}, 'videojs')
