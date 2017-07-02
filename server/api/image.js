const express = require('express')
const router = express.Router()
const Image = require('../models/image')

router.get('/images', (req, res, next) => {
  const num = req.query.count * 20
  Image.find({}).sort({'collections_count': -1}).limit(num).then(images => {
    res.send(images)
  }).catch(next)
})

module.exports = router
