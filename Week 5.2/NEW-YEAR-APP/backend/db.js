const mongoose = require("mongoose");

// mongodb url
mongoose.connect('mongodb://127.0.0.1:27017/todos'); // double quote is not work

const db = mongoose.connection;
db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);
module.exports = {
  todo,
};
