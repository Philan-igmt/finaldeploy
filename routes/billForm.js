const express = require("express");
const router = express.Router();

// importing the model
const BillForm = require("../models/BillForm");

// to create a form
router.post("/", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const streetaddress = req.body.streetaddress;
  const town = req.body.town;
  const province = req.body.province;
  const postalcode = req.body.postalcode;
  const phone = req.body.phone;
  const email = req.body.email;
  const cart = req.body.cart;

  const newInfo = new BillForm({
    firstname,
    lastname,
    streetaddress,
    town,
    province,
    postalcode,
    phone,
    email,
    cart,
  });

  newInfo
    .save()
    .then(() => res.json("information added"))
    .catch((err) => res.json("error " + err));
});

module.exports = router;
