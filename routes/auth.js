const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// importing the model
const UserForm = require("../models/Register");

// to create a form
router.post("/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ msg: "enter all fields" });
  }

  UserForm.findOne({ username }).then((user) => {
    if (!user) return res.status(400).json({ msg: "user does not exist" });

    // validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token,
            user: {
              username: user.username,
            },
          });
        }
      );
    });
  });
});

// @route auth/user
router.get("/user", auth, (req, res) => {
  UserForm.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
