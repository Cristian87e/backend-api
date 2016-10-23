const CONSTS = require('../constants/index')
const orm = require('../../common/orm')
const schema = require('./schema')

const model = orm.model(`${CONSTS.MODEL.NAME}`, schema)

module.exports = model
