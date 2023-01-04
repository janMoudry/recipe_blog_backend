import { Mongoose } from "mongoose";

const mongoose: Mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const RecipeScheme = new Scheme({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: String, required: true },
  recipe: { type: String, required: true },
  ingredience: { type: [String], required: true },
  mainCategory: { type: String, required: true },
  secondaryCategory: { type: String, required: true },
  calories: { type: String, required: true },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Recipe", RecipeScheme);
