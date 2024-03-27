const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  friendList: {
    type: Array,
    require: false,
    ref: 'User'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User