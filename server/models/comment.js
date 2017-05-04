const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  by: {
    type: name,
    required: true
  },
  text: String,
  supporter: Number,
  fight: Number,
  childrens: [String],
  parent: String
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
