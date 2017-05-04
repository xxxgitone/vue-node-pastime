const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./api/user')

const app = express()

// connect db
mongoose.connect('mongodb://localhost:27017/vnpostime')
mongoose.Promise = global.Promise

app.set('port', process.env.PORT || 8080)

app.use(bodyParser.json())

app.use('/api', userRoutes)

// 错误处理
app.use((err, req, res, next) => {
  res.status(442).send({ error: err.message })
})

app.listen(app.get('port'), () => {
  console.log(`Express started in ${app.get('env')} mode on http://localhsot:${app.get('port')}`)
})
