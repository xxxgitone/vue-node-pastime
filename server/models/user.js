const mongoose = require('mongoose')
const Schema = mongoose.Schema

// mongodb会自动生成_id，这里添加id属性，是因为_id是根据时间戳等组合动态生成
// 在数据模拟是使用固定ID方便管理
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name fields is required'],
    unique: true
  },
  password: {
    type: String
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  },
  avatar_url: String,
  email: String,
  followers: Number,
  following: Number,
  role: String,
  gender: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User
