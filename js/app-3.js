console.log('app-3')

console.log('app-3 outside require.ensure')
require.ensure([], function (require) {
  require('./vendor-1.js')
  require('./vendor-2.js')
  console.log('app-3 inside require.ensure')
})
