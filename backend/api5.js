const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server

const allowedurl = "http://localhost:5173";
const corsOptions = {
  origin: allowedurl,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(cors(corsOptions)); // creating object of cors library
app.use(express.json()); // injecting the json to handel json data communication
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
const studentNestedSchema = new mongoose.Schema({
  fname: String,
  mobile: Number,
  city: {
    name: String,
    area: String,
  },
  edu: String,
});
const StudentNested = mongoose.model("StudentNested", studentNestedSchema, "test-area");
// Model with explicit collection name
const Student = mongoose.model("sdf", studentSchema, "test");

// GET route
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
app.get("/api/studentsNested", async (req, res) => {
  try {
    const students = await StudentNested.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
