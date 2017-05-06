const express = require('express')
const router = express.Router()
const Video = require('../models/video')

router.get('/videos', (req, res, next) => {
  Video.find({}).then(videos => {
    res.send(videos)
  }).catch(next)
})

router.get('/videos/:id', (req, res, next) => {
  const videoId = req.params.id
  Video.findOne({videoId: videoId}).then(video => {
    res.send(video)
  }).catch(next)
})

router.post('/videos', (req, res, next) => {
  Video.create(req.body).then(video => {
    res.send(video)
  })
})

router.delete('/videos/:id', (req, res, next) => {
  const videoId = req.params.id
  Video.findOneAndRemove({ videoId: videoId }).then(video => {
    res.send(video)
  })
})


module.exports = router
