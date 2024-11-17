const express = require("express")
const middleware = require('./middleware')
const app = express()
const server = app.listen(3000, function () {
  console.log(`App running at local http://localhost:3000`)
})