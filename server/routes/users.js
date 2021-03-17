const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { check } = require("express-validator");

// Create an user - /api/users
router.post(
  "/",
  [
    check("name", "The name is necesary").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "The password must be at leat 6 characters").isLength({
      min: 6,
    }),
  ],
  userController.createUser
);

module.exports = router;
