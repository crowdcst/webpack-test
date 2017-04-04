console.log('app-1')
document.addEventListener('DOMContentLoaded', function () {
  require.ensure([], function (require) {
    const videojs = require('video.js')
    window.videojs = videojs
    require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
    const playerEl = document.getElementById('example-video')
    console.log('debug', 'playerEl', playerEl)
    const player = videojs(playerEl)
    player.on('ready', function () {
      console.log('debug', 'playerReady')
      player.src({
        type: 'application/x-mpegURL',
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
      })
      player.play()
    })
    console.log('app-2 inside require.ensure')
  })
})
