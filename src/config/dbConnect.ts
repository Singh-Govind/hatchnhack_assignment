const mongoose = require("mongoose");

const conn = () => {
  try {
    return mongoose.connect(`${process.env.LOCAL_DB_URL}`);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = conn;
