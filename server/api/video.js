const express = require('express')
const router = express.Router()
const Video = require('../models/video')

router.get('/videos', (req, res, next) => {
  Video.find({}).sort().then(videos => {
    res.send(videos)
  }).catch(next)
})

router.get('/videos/:id', (req, res, next) => {
  const id = req.params.id
  Video.findOne({id: id}).then(video => {
    res.send(video)
  }).catch(next)
})

// 新增一个视频
router.post('/videos', (req, res, next) => {
  console.log(req.body)
  console.log(req.decoded)
  res.json({
    message: 'success'
  })
  // Video.create(req.body).then(video => {
  //   res.send(video)
  // })
})

router.delete('/videos/:id', (req, res, next) => {
  const id = req.params.id
  Video.findByIdAndRemove({ _id: id }).then(video => {
    res.send(video)
  })
})

module.exports = router
