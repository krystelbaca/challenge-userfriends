const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  friendList: {
    type: Array,
    required: false,
    ref: 'User'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User