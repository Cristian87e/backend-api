const orm = require('../../common/orm')
const contract = require('./contract')

const schema = new orm.Schema(contract.getTypes());

module.exports = schema;
