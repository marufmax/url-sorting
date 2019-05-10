const TodoModel = require('../models/Todo')

module.exports.index = async (req, res) => {
  const todos = await TodoModel.find()

  if (todos.length) {
    return res.send(todos)
  } else {
    return res.status(404).json({
      message: 'No todo Found'
    })
  }
}

module.exports.view = (req, res) => {
  TodoModel.findById(req.params.id).then(doc => {
    return res.json(doc)
  })
}

module.exports.create = (req, res) => {
  const todo = new TodoModel({
    task: req.body.task
  })

  todo.save()
    .then(doc => {
      res.json(doc)
    }).catch(err => {
      console.log(err)
    })
}

module.exports.destroy = async (req, res) => {

  const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id)

  if (deletedTodo) {
    return res.json({
      "message": deletedTodo.task + " is now deleted"
    })

  }
  return res.status(404).json({
    "message": "Todo is not found or already deleted"
  })
}

module.exports.update = async (req, res) => {
  const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.id, {
    $set: {
      task: req.body.task,
      done: req.body.done
    }
  })

  return res.json(updatedTodo)
}