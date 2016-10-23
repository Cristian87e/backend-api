var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const modelActions = require('../model/actions')
const modelContract = require('../model/contract')

const fetch = (req, res) => {
  console.log('fetched')
  const id = req.params.name

  modelActions.find((err, data) => {
    if (err) {
      return err
    }

    res.status(200).jsonp(data)
  })
}

const create = (req, res) => {
  console.log('created')
  const body = req.body

  const data = {
    name: body.name,
    mass: body.mass,
    radius: body.radius,
  }

  modelActions.create(data).then((model) => {
    console.log(modelContract.normalize(model))
    res.status(200).jsonp(modelContract.normalize(model))
  })
}

module.exports = {
  fetch: fetch,
  create: create,
}