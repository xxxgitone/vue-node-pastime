const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  by: {
    type: String
  },
  text: String,
  supporter: Number,
  childrens: [String],
  parent: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
