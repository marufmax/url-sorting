const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    trim: true,
    required: true,
    min: [3, 'Task title is too small']
  },
  done: {
    type: Boolean,
    default: false,
  },
  time: Date
}, {
  timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)