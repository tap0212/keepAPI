const express = require('express')
const router = express.Router()

const {
    getNoteById,
    createNote,
    getNote,
    updateNote,
    removeNote,
    getAllNotes
} = require('../controllers/note.js')
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");


router.param("userId", getUserById);
router.param("noteId", getNoteById);
//create
router.post(
    "/create/note/:userId",
    isSignedIn,
    isAuthenticated,
    createNote
)

//read
router.get("/note/:noteId", getNote)
router.get("/notes", getAllNotes);

//update
router.put(
    "/note/:noteId/:userId",
    isSignedIn,
    isAuthenticated,
    updateNote
)

//remove
router.delete(
    "/note/:noteId/:userId",
    isSignedIn,
    isAuthenticated,
    removeNote
  );

module.exports = router;