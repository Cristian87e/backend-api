var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data

const index = function (app) {
  app.get('/planets', function (req, res) {
    res.json([
      {
        id: 23,
        name: 'Asgardia',
      }
    ])
  })

  return app
}

module.exports = index
