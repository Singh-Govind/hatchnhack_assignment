const express = require("express");
const Vendor = require("./vender.model");

const app = express.Router();

app.post("/createvendor", async (req, res) => {
  try {
    let vendor = await Vendor.create({ ...req.body });
    res.send({ msg: "vendor created", vendor });
  } catch (e) {
    res.status(500).send({ msg: "something bad happen" });
  }
});

module.exports = app;
