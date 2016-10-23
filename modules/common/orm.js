const CONSTS = require('./constants')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(CONSTS.DB.CONNECTION_STRING)

module.exports = mongoose;
