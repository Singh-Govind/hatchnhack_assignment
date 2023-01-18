const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.post("/createproduct", async (req, res) => {
  try {
    let product = await Product.create({ ...req.body });
    res.send({ msg: "product created", product });
  } catch (e) {
    res.status(500).send({ msg: "something bad happen" });
  }
});

module.exports = app;
