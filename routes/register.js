const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

// importing the model
const UserForm = require("../models/Register");

// to create a form
router.post("/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = new UserForm({
      username,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save().then((user) => {
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
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
