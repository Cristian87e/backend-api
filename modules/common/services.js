const express = require('express')
const bodyParser = require('body-parser')

const restApi = express()

restApi.use(bodyParser.json()) // for parsing application/json
restApi.use(bodyParser.urlencoded({ extended: true }))
restApi.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

module.exports = restApi
