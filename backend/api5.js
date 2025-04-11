const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mern24");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Database is Connected...");
});

// Schema
const studentSchema = new mongoose.Schema({
  fname: String,
  mobile: Number,
  city: String,
  edu: String,
});

// Model with explicit collection name
const Student = mongoose.model("Student", studentSchema, "test");

// GET route
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
