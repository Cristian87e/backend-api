"use strict"

const _ = require('lodash')

const contract = {
  name: {
    default: '',
    type: String,
  },
  mass: {
    default: 0,
    type: Number,
  },
  radius: {
    default: 0,
    type: Number,
  },
}

const getDefaults = () => (
  _.mapValues(contract, obj => obj.default)
)

const getTypes = () => (
  _.mapValues(contract, obj => obj.type)
)

const normalize = (obj) => {
  const defaults = getDefaults()
  let keys = _.keys(defaults)

  if (_.has(obj, '_id')) {
    keys = _.concat(keys, ['_id'])
  }

  const cleanObj = _.pickBy(obj, keys)

  return _.assign(defaults, cleanObj)
}

module.exports = {
  getDefaults: getDefaults,
  getTypes: getTypes,
  normalize: normalize,
}
