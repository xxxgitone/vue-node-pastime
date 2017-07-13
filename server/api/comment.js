const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')

router.get('/comments', (req, res, next) => {
  const typeId = req.query.typeId
  const type = req.query.type
  Comment.find({type: type, typeId: typeId}).then(comments => {
    const newArr = comments.filter(comment => !comment.parent)
    res.send(newArr)
  }).catch(next)
})

router.get('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Comment.findById({_id: id}).then(comment => {
    res.send(comment)
  }).catch(next)
})

router.post('/comments', (req, res, next) => {
  const comment = req.body
  Comment.create(comment).then(comment => {
    if (comment.parent) {
      Comment.update({_id: comment.parent}, {$push: {children: comment._id}}).then(() => {
        res.send(comment)
      })
    } else {
      Comment.findById({_id: comment._id}).then(comment => {
        res.send(comment)
      })
    }
  })
})

router.delete('/comments/:id', (req, res, next) => {
  const id = req.params.id
  Comment.findByIdAndRemove({ _id: id }).then(comment => {
    res.send(comment)
  })
})

module.exports = router
