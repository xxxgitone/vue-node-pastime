const express = require('express')
const router = express.Router()
const Video = require('../models/video')

router.get('/videos', (req, res, next) => {
  Video.find({}).sort({created_at: -1}).then(videos => {
    res.send(videos)
  }).catch(next)
})

router.get('/videos/:id', (req, res, next) => {
  const id = req.params.id
  Video.findById({_id: id}).then(video => {
    res.send(video)
  }).catch(next)
})

// 新增一个视频
router.post('/videos', (req, res, next) => {
  const videoInfo = {
    user: {
      name: req.decoded.name,
      avator: req.decoded.avatar_url
    },
    playUrl: req.body.playUrl,
    coverSrc: req.body.coverSrc,
    title: req.body.title
  }
  Video.create(videoInfo).then(video => {
    res.json({
      success: true,
      message: '添加成功',
      video: video
    })
  }).catch(err => {
    res.json({
      success: false,
      err: err
    })
    next()
  })
})

router.delete('/videos/:id', (req, res, next) => {
  const id = req.params.id
  Video.findByIdAndRemove({ _id: id }).then(video => {
    res.send(video)
  })
})

module.exports = router
