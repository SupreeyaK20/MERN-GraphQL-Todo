const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  isCompleted: { type: Boolean },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
