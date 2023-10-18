const Note = require('../models/notes.model');

exports.createNote = async (req, res) => {
  try {
    const { title, description, createAt } = req.body;
    const newNote = new Note({ title, description, nameCreator , createAt });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la nota' });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las notas' })
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ error: 'La nota no existe' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener la nota' });
  }
};

exports.updateNoteById = async (req, res) => {
  try {
    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updateNote) {
      return res.status(404).json({ error: 'Nota no encontrada o no existe' });
    }
    res.status(200).json(updateNote);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la nota' });
  }
};

exports.deleteNoteById = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);

    if (!deleteNote) {
      return res.status(404).json({ error: 'Nota no encontrada o no existe' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'No se puedo eliminar la nota' });
  }
};