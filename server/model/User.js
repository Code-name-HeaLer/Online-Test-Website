const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require(bcrypt)
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    require: [true, "Please enter your password"],
    minlength: [6, "Minimum password length is 6 character"],
  }
})
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = bcrypt.hash(this.password, salt)
  next()
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel

