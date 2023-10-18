const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  title: {
    type: 'string',
    required: true
  },
  description:{
    type: 'string',
    required: true
  },
  nameCreator: {
    type: 'string',
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('notas', notesSchema);