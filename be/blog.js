const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast')
const Schema = mongoose.Schema

let blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type:Date,
    required:true
  },
  main: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array
  }
})
module.exports = mongoose.model('Blog', blogSchema)