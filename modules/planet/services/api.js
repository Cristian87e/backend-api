const CONSTS = require('../constants/index')
const actions = require('./actions')
const restApi = require('../../common/services')

const baseUrl = CONSTS.URL.BASE

restApi.get(`${baseUrl}`, actions.fetch)
restApi.post(baseUrl, actions.create)
