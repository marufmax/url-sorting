const Router = require('express').Router()
const {
  index,
  create,
  view,
  update,
  destroy,
} = require('../controllers/todoController')

Router.get('/', index)
Router.post('/', create)
Router.get('/:id', view)
Router.put('/:id', update)
Router.delete('/:id', destroy)

module.exports = Router