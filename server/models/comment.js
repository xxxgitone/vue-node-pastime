const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  user: {
    name: String,
    avatar_url: String,
    _id: String
  },
  text: String,
  supporter: Number,
  children: [String],
  parent: String,
  created_at: { type: Date, default: Date.now() },
  // 是什么类型下的评论，图片或者视频
  type: String,
  // 该类型下的Id，比如图片Id或者视频ID
  typeId: String
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
