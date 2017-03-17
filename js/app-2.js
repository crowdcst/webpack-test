console.log('app-2')

console.log('app-2 outside require.ensure')
require.ensure([], function (require) {
  require('./vendor-1.js')
  console.log('app-2 inside require.ensure')
})
