const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  usuario: {
    type: 'string',
    required: true
  }
})

module.exports = mongoose.model('Usuario', userSchema)