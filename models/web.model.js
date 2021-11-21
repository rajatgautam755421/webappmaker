const { Schema, model } = require("mongoose");

const webSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "User Is Required"],
  },
  typeOfLanguage: {
    type: String,
    enum: ["javascript", "python", "php", "java", "dotnet", "wordpress"],
    required: true,
  },
  priceRange: {
    type: String,
    enum: ["20", "40", "60", "above 60"],
    required: true,
  },
  noOfPages: {
    type: Number,
    required: [true, "Number Of Pages Is Required"],
  },
  typeOfApp: {
    type: String,
    enum: ["ecommerce", "portfolio", "bussiness", "vlog", "news", "others"],
    required: [true, "Type Of App Is Required"],
  },

  isFullStack: {
    type: String,
    enum: ["frontend", "backend", "both"],
    required: true,
  },
});

module.exports = new model("WebModel", webSchema);
