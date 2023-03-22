const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

mongoose.connect('mongodb://localhost:27017/FENAMAC', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})