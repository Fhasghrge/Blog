const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast')
const Schema = mongoose.Schema

let blogSchema = new Schema({
  title: {
    type: String,
  },
  date: {
    type:Date,
    default: Date.now,
    required: true
  },
  main: {
    type: String,
  },
  author: {
    type: String,
    default: 'Anonymous'
  }
})
module.exports = mongoose.model('Blog', blogSchema)