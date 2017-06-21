const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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

// 获取单个用户，通过token, 和query，通过query查询其他用户
router.get('/user', (req, res, next) => {
  const token = req.headers.accesstoken
  const decode = jwt.verify(token, 'vnpastime')
  const name = decode.name
  User.findOne({ name: name }).then(user => {
    res.send(user)
  }).catch(next)
})

// 添加一个用户,用户登录
router.post('/users', (req, res, next) => {
  let formInfo = req.body
  // 密码加盐处理，用于替换数据库密码
  // const salt = bcrypt.genSaltSync(10)
  // const hash = bcrypt.hashSync(req.body.password, salt)
  // console.log(hash)
  User.findOne({ name: formInfo.username }).then(user => {
    if (user != null) {
      if (!bcrypt.compareSync(formInfo.password, user.password)) { // 如果密码错误，返回状态给前端
        res.json({
          success: false,
          message: '认证失败，密码错误'
        })
      } else { // 密码正确
        const userToken = {
          name: user.name,
          id: user._id,
          avatar_url: user.avatar_url
        }
        // 密钥
        const secret = 'vnpastime'
        // 生成token,可以在加一个设置失效日期
        const token = jwt.sign(userToken, secret)
        res.json({
          success: true,
          message: '登录成功',
          token: token
        })
      }
    } else {
      res.json({
        success: false,
        message: '用户不存在'
      })
    }
  }).catch(next)

  // User.create(req.body).then(user => {
  //   res.send(user)
  // }).catch(next)
})

// 修改
router.put('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findByIdAndUpdate({ _id: id }, req.body).then(user => {
    User.findById({_id: id}).then((user) => {
      res.send(user)
    })
  }).catch(next)
})

// 删除一个用户
router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  User.findByIdAndRemove({ _id: id }).then(user => {
    res.send(user)
  }).catch(next)
})

module.exports = router
