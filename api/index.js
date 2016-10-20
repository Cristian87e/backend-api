const CONSTANTS = require('./config/constants')
const express = require('express')
const models = require('./models/index')
const apiConfig = require('./config/app')

const app = express()
apiConfig(app)

models(app).listen(CONSTANTS.PORT, function () {
  console.log(`Example app listening on port ${CONSTANTS.PORT}!`)
})
