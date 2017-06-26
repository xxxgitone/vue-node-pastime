const express = require('express')
const router = express.Router()
const Video = require('../models/video')
const User = require('../models/user')

router.get('/videos', (req, res, next) => {
  const p = req.query.p || 1
  const limitNum = 15
  Video.find({}).count().then((count) => {
    let total = count
    Video.find({}).sort({created_at: -1}).skip((p - 1) * limitNum).limit(limitNum).then(videos => {
      let tasks = []
      // 创建的数据的时候没有给video下的用户添加id字段，然后通过名字查找出用户的id再返回回去
      videos.forEach(video => {
        const name = video.user.name
        let task = User.findOne({name: name})
        tasks.push(task)
      })
      Promise.all(tasks).then(users => {
        videos.forEach(video => {
          users.forEach(user => {
            if (video.user.name === user.name) {
              video.user = {
                name: user.name,
                avator: user.avatar_url,
                _id: user._id
              }
            }
          })
        })
        res.send({
          total,
          videos
        })
      })
    })
  })
})

// 通过用户id查找他发布的视频
// 但是video下的用户并没有直接添加id字段
// 所以得通过穿过来的id，找到用户表中的用户，然后跟video文档中的用户做匹配
router.get('/uservideos', (req, res, next) => {
  const userId = req.query.userId
  let userVideos = []
  User.findOne({_id: userId}).then(user => {
    Video.find({}).then(videos => {
      videos.forEach(video => {
        if (video.user.name === user.name) {
          userVideos.push(video)
        }
      })
    }).then(() => {
      res.json({userVideos})
    })
  })
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
    res.send({
      success: true
    })
  })
})

module.exports = router
