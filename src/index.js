const express = require('express')
const mongoose = require('mongoose')
const routes = require('./Router.js')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://mongodb:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err))

app.use('/api', routes)

const port = 3000
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})