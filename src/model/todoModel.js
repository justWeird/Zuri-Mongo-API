//This holds the data schema of the database.
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 20,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
