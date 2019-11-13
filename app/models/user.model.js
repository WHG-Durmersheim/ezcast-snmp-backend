const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  "screenName": String,
  "email": String,
  "username": String,
  "password": String,
})

module.exports = mongoose.model('User', userSchema);
