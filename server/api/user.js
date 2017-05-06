const express = require('express')
const router = express.Router()
const User = require('../models/user')

// 获取全部用户信息
router.get('/users', (req, res, next) => {
  User.find({}).then(users => {
    res.send(users)
  }).catch(next)
})

// 获取单个信息
router.get('/users/:userId', (req, res, next) => {
  const userId = req.params.userId
  User.findOne({ userId: userId }).then(user => {
    res.send(user)
  }).catch(next)
})

// 添加一个用户
router.post('/users', (req, res, next) => {
  User.create(req.body).then(user => {
    res.send(user)
  }).catch(next)
})

// 修改
router.put('/users/:userId', (req, res, next) => {
  const userId = req.params.userId
  User.findOneAndUpdate({ userId: userId }, req.body).then(user => {
    User.findOne({userId: userId}).then((user) => {
      res.send(user)
    })
  })
})

// 删除一个用户
router.delete('/users/:userId', (req, res, next) => {
  const userId = req.params.userId
  User.findOneAndRemove({ userId: userId }).then(user => {
    res.send(user)
  })
})


module.exports = router
