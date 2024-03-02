const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
const app = express()
const port = 3000
const opt = { root: path.join(__dirname, "../frontend/") }

app.use(express.static('../frontend/'))
app.use(express.json())
app.get('/', (req, res) => {
  res.sendFile('index.html', opt)
})
app.use('/login', loginRouter)
app.use('/signup', signupRouter)

mongoose.connect('mongodb+srv://subhamc88:subham2004@userdata.unfcofh.mongodb.net/users')
  .then(mongoose.connection.once('open', () => { console.log("DB Connected") }))
  .then(app.listen(port, () => { console.log(`Server is listening on ${port}`) }))
  .catch('error', (error) => { console.log(error) }
  )
