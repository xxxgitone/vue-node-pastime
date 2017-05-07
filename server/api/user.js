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
router.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findById({ _id: id }).then(user => {
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
router.put('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findByIdAndUpdate({ _id: id }, req.body).then(user => {
    User.findById({_id: id}).then((user) => {
      res.send(user)
    })
  })
})

// 删除一个用户
router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findByIdAndRemove({ _id: id }).then(user => {
    res.send(user)
  })
})


module.exports = router
