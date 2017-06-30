const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgaeSchema = new Schema({
  user: {
    _id: String,
    name: String,
    avatar_url: String
  },
  image_url: String,
  created_at: { type: Date, default: Date.now() },
  collections_count: Number,
  description: String
})

const Image = mongoose.model('Image', ImgaeSchema)
module.exports = Image
