var fs = require('fs')
var path = require('path')

var originPath = path.join(__dirname, '/node_modules/leaflet/dist/leaflet.css')
var destinationPath = path.join(__dirname, '/node_modules/leaflet/dist/leaflet.scss')

fs.readFile(originPath, 'utf8', function read (err, data) {
  if (err) {
    throw err
  }

  var dataByLine = data.split('\n')

  for (var i = dataByLine.length - 1; i > -1; i--) {
    if (dataByLine[i].indexOf('background-image:') !== -1) {
      delete dataByLine[i]
    }
  }

  fs.writeFile(destinationPath, dataByLine.join('\n'), 'utf8', function (err) {
    if (err) return console.error(err)
  })
})
