const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017`);
connection
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log("Mongo connection error", err);
    });

module.exports = connection;