 
const express = require("express");
const router = express.Router();

const {
    getUserById,
    getUser,
    updatePin
} = require('../controllers/user')
const { isSignedIn, isAuthenticated } = require("../controllers/auth");


router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put(
    "/update/:userId",
    isSignedIn,
    isAuthenticated,
    updatePin
  )

module.exports = router;