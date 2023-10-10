const mongoose = require("mongoose");

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  companyName: String,
  reviewText: String,
  rating: Number,
});

// Create the ReviewModel
const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel