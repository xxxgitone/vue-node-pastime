const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema({
  by: {
    type: String
  },
  videosrc: String,
  title: String,
  created_at: { type: Date, default: Date.now() },
  duration: Number,
  supporter: Number,
  fight: Number,
  playcount: Number,
  comments: [String]
})

const Video = mongoose.model('Video', VideoSchema)

module.exports = Video

