const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.listen(3000, () => {
  console.log("Server is working on: http://localhost:3000")
})

app.get('/', function (req, res) {
  res.render('home')
})