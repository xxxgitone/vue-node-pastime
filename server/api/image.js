const express = require('express')
const router = express.Router()
const Image = require('../models/image')

router.get('/images', (req, res, next) => {
  Image.find({}).sort({'collections_count': -1}).then(images => {
    res.send(images)
  }).catch(next)
})

module.exports = router
