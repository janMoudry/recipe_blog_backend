import { Mongoose } from "mongoose";

const mongoose: Mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const testScheme = new Scheme({
  name: { type: String },
  date: { type: Date },
});

module.exports = mongoose.model("Test", testScheme);
