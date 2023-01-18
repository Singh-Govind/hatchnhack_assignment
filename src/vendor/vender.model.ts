const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendor_name: { type: String, required: true },
  vendor_email: { type: String, reuqired: true },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
