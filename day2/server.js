const express = require('express')
const todoRoutes = require('./routes/todos')

const app = express()

app.listen(process.env.APP_PORT, () => {
  console.log("Server is working at: http://localhost:3000")
})


app.use(express.json())
app.use(express.urlencoded({
  extends: true
}))

app.use(todoRoutes)