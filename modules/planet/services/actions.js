var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const modelActions = require('../model/actions')
const modelContract = require('../model/contract')

const fetch = (req, res) => {
  modelActions.find().then((data) => {
    res.status(200).json(data)
  })
}

const create = (req, res) => {
  const body = req.body

  const data = {
    name: body.name,
    mass: body.mass,
    radius: body.radius,
  }

  modelActions.create(data).then((model) => {
    res.status(200).jsonp(modelContract.normalize(model))
  })
}

const remove = () => {
  const id = req.params.id

  modelActions.deleteById(id).then((err, data) => {
    if (err) {
      return err
    }

    res.status(200).jsonp(data)
  })
}

module.exports = {
  fetch: fetch,
  create: create,
  remove: remove,
}
