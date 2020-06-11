var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin} = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Username should be 3-10 characters long").isLength({ min: 3, max:10 }),
    check("password", "Pin should be of 4 digits").isLength({ min: 4, max:4 })
  ],
  signup
);

router.post(
  "/signin",
  [
    check("name", "Username is required").isLength({min:3}),
    check("password", "Pin is required").isLength({ min: 4 })
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;