const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./server/api/user')
const videoRoutes = require('./server/api/video')
const commentRoutes = require('./server/api/comment')

const app = express()

// connect db
mongoose.connect('mongodb://localhost:27017/vnpastime')
mongoose.Promise = global.Promise

app.set('tokenSecret', 'vnpastime')
app.use(bodyParser.json())

app.use('/auth', userRoutes)
app.use('/api', videoRoutes)
app.use('/api', commentRoutes)

// 错误处理
app.use((err, req, res, next) => {
  res.status(442).send({ error: err.message })
})

app.listen(4000, () => {
  console.log(`Express started in ${app.get('env')} mode on http://localhsot:4000`)
})
