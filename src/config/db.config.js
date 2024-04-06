const mongoose = require("mongoose");
const { MONGODB_CONNECTION_URL, NODE_ENV } = require("./server.config");
async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(MONGODB_CONNECTION_URL);
    }
  } catch (error) {
    console.log("unable to connect db", error);
  }
}

module.exports = connectToDB;
