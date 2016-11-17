const _ = require('lodash')
const schema = require('./schema')
const Model = require('./model')
const contract = require('./contract')

const find = () => {
  return new Promise((resolve, reject) => {
    Model.find({name: 'Planet One'}, (err, data) => {
      if (!_.isEmpty(err)) {
        reject(err)
      }
      var data = _.map(data, contract.normalize)
      resolve(data)
    })
  })
}

const findByName = (name, cb) => {
  Model.find({ name: name }, cb)
}

const findById = (id, cb) => {
  Model.find({ _id: id })

  return new Promise((resolve, reject) => {
    Model.save((err) => {
      if (!_.isEmpty(err)) {
        reject(err)
      }

      resolve(model)
    })
  })
}

const create = (data, cb) => {
  // TODO: review return only contract + id
  const model = new Model(contract.normalize(data))

  return new Promise((resolve, reject) => {
    Model.save((err) => {
      if (!_.isEmpty(err)) {
        reject(err)
      }

      resolve(model)

    })
  })
}

const deleteById = (id, cb) => {
  // TODO: return err but id did not find.
  Model.remove({ _id: id }, cb)
}

// schema.statics.create = (items, cb) => {
//   return this.save({ id: id }, cb)
// }
//
// .save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// })

module.exports = {
  find: find,
  findByName: findByName,
  findById: findById,
  create: create,
  deleteById: deleteById,
}
