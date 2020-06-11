const Note = require('../models/note')

exports.getNoteById = (req, res, next, id) => {
    Note.findById(id).exec((err, not) => {
      if (err) {
        return res.status(400).json({
          error: "Note not found."
        });
      }
      req.note = not;
      next();
    });
  };

  exports.createNote = (req, res) => {
      const note = new Note(req.body)

      note.save((err, note) => {
          if(err){
              return res.status(400).json({
                  error:"Not able to save"
              })
          }
          res.json({note})
      })
  }

  exports.getNote = (req, res) => {
    return res.json(req.note);
  };

  exports.getAllNotes = (req, res) => {
    Note.find().exec((err, notes) => {
      if (err) {
        return res.status(400).json({
          error: "No Notes found"
        });
      }
      res.json(notes);
    });
  };

  exports.updateNote = (req, res) => {
    const note = req.note;
    note.title = req.body.title;
    note.note = req.body.note
    note.save((err, updatedNote) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update "
        });
      }
      res.json(updatedNote);
    });
  };
  
  exports.removeNote = (req, res) => {
    const note = req.note;
  
    note.remove((err, note) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete."
        });
      }
      res.json({
        message: "Successfully deleted"
      });
    });
  };