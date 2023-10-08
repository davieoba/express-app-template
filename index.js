require('dotenv').config({ path: './env' })
const express = require('express')
const { MONGODB_URI } = require('./utils/config')
const appRoute = require('./routes/index')

const app = express()

app.use(express.json())
app.use(cors())

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Application connected to DB')
  })
  .catch(() => console.log('err'))


app.use('/app', appRoute)

module.exports = app