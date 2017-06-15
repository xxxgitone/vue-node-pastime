// 验证token的中间件
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  // 支持三中发送token的方式，请求头信息、表单、查询参数
  if (req.method !== 'POST') { // post请求才需要验证权限
    next()
  } else {
    const token = req.headers.accesstoken || req.body.token || req.query.token
    if (token) {
      jwt.verify(token, 'vnpastime', (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'token验证失败'
          })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      res.json({
        success: false,
        message: 'No token provided'
      })
    }
  }
}
