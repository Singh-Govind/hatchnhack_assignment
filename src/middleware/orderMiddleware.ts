const Vendor = require("../vendor/vender.model");

async function createOrderMiddleware(req, res, next) {
  try {
    let vendor = await Vendor.find({ product_id: req.body.product_id }).sort({
      price: 1,
    });
    req.vid = vendor[0]._id;
    next();
  } catch (e) {
    return res.status(500).send({ msg: e.message });
  }
}

module.exports = { createOrderMiddleware };
