const bodyParser = require('body-parser')

const index = function (app) {
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

  return app
}

module.exports = index
