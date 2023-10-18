const User = require('../models/user.model');

exports.createUser = async (req, res) => {
  try {
    const { usuario } = rq.body;
    const newUser =  new User({ usuario });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
};