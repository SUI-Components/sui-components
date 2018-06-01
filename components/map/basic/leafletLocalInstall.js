var fs = require('fs')
var path = require('path')

var leafletPath = require.resolve('leaflet')
var originPath = path.resolve(leafletPath, '../leaflet.css')
var destinationPath = path.resolve(leafletPath, '../leaflet.scss')

fs.readFile(originPath, 'utf8', function read(err, data) {
  if (err) {
    throw err
  }

  var dataByLine = data.split('\n')

  for (var i = dataByLine.length - 1; i > -1; i--) {
    if (dataByLine[i].indexOf('background-image:') !== -1) {
      delete dataByLine[i]
    }
  }

  fs.writeFile(destinationPath, dataByLine.join('\n'), 'utf8', function(err) {
    if (err) return console.error(err)

    console.log('Leaflet modified properly')
  })
})
