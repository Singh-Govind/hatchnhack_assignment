const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  customer_email: { type: String, reuqired: true },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  vendor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  quantity: { type: Number, required: true },
  delivery_time: { type: String, default: "25 January" },
});

const finalOrderSchema = new mongoose.Schema({
  ordered_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
const FinalOrder = mongoose.model("FinalOrder", finalOrderSchema);

module.exports = { Order, FinalOrder };
