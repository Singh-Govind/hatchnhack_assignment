const express = require("express");
const { Order, FinalOrder } = require("./order.model");
const { createOrderMiddleware } = require("../middleware/orderMiddleware");

const app = express.Router();

app.post(
  "/createorder",
  createOrderMiddleware,
  async (req: Express.Response, res: Express.Request) => {
    console.log(req.vendor_id);

    try {
      let order = await Order.create({ ...req.body, vendor_id: req.vid });
      if (order) {
        res.status(200).send({ msg: "order created", order_id: order._id });
      } else {
        return res.status(500).send({ msg: "something went wrong" });
      }
    } catch (e) {
      res.status(400).send({ msg: "bad request" });
    }
  }
);

app.get("/vieworder", async (req, res) => {
  let id = req.body.id;
  try {
    if (!id) {
      return res.status(401).send({ msg: "please provide id" });
    }
    let order = await Order.find({ _id: id }).populate({
      product_id,
      vendor_id,
    });
    res.send(order);
  } catch (e) {
    res.status(400).send({ msg: "bad request" });
  }
});

app.post("/commitorder", async (req, res) => {
  let { ordered_id } = req.body;
  try {
    let order = await FinalOrder.create({ ordered_id });
    res.send({ msg: "order finilised", order });
  } catch (e) {
    res.status(500).send({ msg: "something went wrong" });
  }
});

module.exports = app;
