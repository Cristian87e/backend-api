const planetsModel = require('./planets/index')

const index = function (app) {
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  planetsModel(app)

  return app
}

module.exports = index
