const mongoose = require('mongoose')

// connecting to MongoBD Atlas
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}`
).then(res => {
  console.log('Connected with MongoDB Atlas')
}).catch(err => {
  console.log('Error! Maybe disconnect or did you configure it correctly?')
  console.log(process.env.MONGO_HOST)
  console.log(err)
})