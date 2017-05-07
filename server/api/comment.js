const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')
const Video = require('../models/video')

router.get('/comments', (req, res, next) => {
  Comment.find({}).then(comments => {
    res.send(comments)
  }).catch(next)
})

router.get('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Comment.findById({_id: id}).then(comment => {
    res.send(comment)
  }).catch(next)
})

router.post('/comments', (req, res, next) => {
  const vId = req.params.by
  Comment.create(req.body).then(comment => {
    const id = comment._id
    Video.findById({_id: vId}).then(video => {
      video.comments.push(id)
    })
    res.send(comment)
  })
})

router.delete('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Comment.findByIdAndRemove({ _id: id }).then(comment => {
    res.send(comment)
  })
})


module.exports = router
