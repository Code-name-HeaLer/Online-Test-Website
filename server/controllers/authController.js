const path = require('path')
const userModel = require('../model/User')
const errorHandler = (error) => {
  console.log(error.message, error.code)
  let err = { email: '', password: '' }
  if (error.message.includes('user validation failed')) { Object.values(error.errors).forEach(error => { console.log(error.properties) }) }
}
module.exports.signupGet = (req, res) => {
  res.sendFile('signup.html', { root: path.join(__dirname, "../../frontend/") }
  )
}
module.exports.loginGet = (req, res) => {
  res.sendFile('login.html', { root: path.join(__dirname, "../../frontend/") }
  )
}
module.exports.signupPost = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await userModel.create({ email, password })
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(400).send("Error, user not created.")
  }
  console.log(email, password)
}
module.exports.loginPost = (req, res) => {
}

