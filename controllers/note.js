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
    Note.findByIdAndUpdate(
      {_id: req.note._id},
      {$set: req.body},
      {new:true, useFindAndModify:false},
      (err, note) => {
        if (err) {
          return res.status(400).json({
            error: "You are not authorized to update this user"
          });
        }
        res.json(note);
      }
    )
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