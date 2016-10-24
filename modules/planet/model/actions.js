const _ = require('lodash')
const schema = require('./schema')
const Model = require('./model')
const contract = require('./contract')

const find = (cb) => {
  Model.find({}, cb)
  // schema.statics.findById = (id, cb) => {
  //   return this.find({ id: id }, cb)
  // }
}

const findByName = (name, cb) => {
  Model.find({ name: name }, cb)
  // schema.statics.findById = (id, cb) => {
  //   return this.find({ id: id }, cb)
  // }
}

const findById = (id, cb) => {
  Model.find({ _id: id }, cb)
  // schema.statics.findById = (id, cb) => {
  //   return this.find({ id: id }, cb)
  // }
}

const create = (data, cb) => {
  // TODO: review return only contract + id
  const model = new Model(contract.normalize(data))

  return new Promise((resolve, reject) => {
    model.save((err) => {
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
