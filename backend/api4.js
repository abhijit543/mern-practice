const express = require("express"); // calling express framework
const app = express(); // creating object of express
const cors = require("cors"); // calling cors origin library to allow data communication between 2 server

const allowedurl = "http://localhost:5173";
const corsOptions = {
  origin: allowedurl,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(cors(corsOptions)); // creating object of cors library
app.use(express.json()); // injecting the json to handel json data communication

//db connection startted
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mern24");
const db = mongoose.connection;

db.on("error", (error) => console.log("Error in DB Connection"));
db.on("open", () => console.log("Database is Connected..."));
//dynamic start
const UserApi = require("./userapi");
app.use("/manageuser", UserApi); //http://localhost:1111/manageuser(get,post,put,patch,delete)
app.get("/", (req, res) => {
  res.send("<h1>Welcome Node Api</h1>");
});

app.get("/booklist", (req, res) => {
  let allbook = ["html", "css", "bootstrap", "javascript", "php", "mysql", "nodejs"];
  res.send(allbook);
});

const fs = require("fs");
app.post("/savemessage", (req, res) => {
  let message = req.body.message + "##\n";
  fs.appendFile("allmessage.txt", message, function (error) {
    if (error) {
      res.send("Error Try later...");
    } else {
      res.send("Your message Stored Successfully... ");
    }
  });
});

app.get("/messagelist", (req, res) => {
  fs.readFile("allmessage.txt", function (error, data) {
    if (error) {
      res.send("No Message for you");
    } else {
      res.send(data);
    }
  });
});

// send email using nodejs
// http://localhost:1111/sendemail
app.post("/sendemail", (req, res) => {
  let toemail = req.body.email;
  let subject = req.body.subject;
  let msg = req.body.message;

  //email sending code start here
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mondalabhijit577@gmail.com",
      pass: "xxxx bbbb dddd ssss",
    },
  });

  var mailOptions = {
    from: "siyaramyadav18@gmail.com",
    to: toemail,
    subject: subject,
    text: msg,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send("Error ! while sending email");
    } else {
      res.send("Email Sent Successfully");
    }
  });
});

app.listen(1111, function () {
  console.log("Server is Live... home url : http://localhost:1111");
});
