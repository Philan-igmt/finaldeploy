const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Product = require("../models/Product");

//to add the product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });
  //save to database
  try {
    const Productss = await product.save();
    res.json(Productss);
  } catch (error) {
    res.json({ message: error });
  }
});

//to get all the products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.json(allProducts);
  } catch (error) {
    res.json({ message: error });
  }
});

//update a product
router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          image: req.body.image,
        },
      }
    );
    res.json(updatedProduct);
  } catch (error) {
    es.json({ message: error });
  }
});

//delete a product from database
router.delete("/:productId", async (req, res) => {
  try {
    const removeProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
