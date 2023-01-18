require("dotenv").config();

const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use("/orders", require("./order/order.router"));
app.use("/products", require("./product/product.router"));
app.use("/vendors", require("./vendor/vendor.router"));

app.get("/", (req: any, res: any) => {
  res.send("server started");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started at ${PORT}`);
});
