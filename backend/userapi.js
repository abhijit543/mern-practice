const express = require("express");
const router = express.Router();
module.exports = router;

const Myuser = require("./userschema");

router.get("/", async (req, res) => {
  let userlist = await Myuser.find();
  res.status(200).json(userlist);
});
router.post("/", async (req, res) => {
  let userinfo = Myuser({
    fullname: req.body.fname,
    email: req.body.emailid,
    password: req.body.password,
    mobile: req.body.mobileno,
    address: req.body.address,
  });
  let info = await userinfo.save();
  res.status(200).json(info);
});
router.delete("/:id", async (req, res) => {
  let userinfo = await Myuser.findById(req.params.id);
  if (userinfo == null) {
    res.status(200).json({ msg: "No Such Records..." });
  } else {
    await userinfo.deleteOne();
    res.status(200).json({ msg: "Record Deleted Successfully" });
  }
});

router.get("/:id", async (req, res) => {
  let userinfo = await Myuser.findById(req.params.id);
  if (userinfo == null) {
    res.status(200).json({});
  } else {
    res.status(200).json(userinfo);
  }
});
router.put("/", async (req, res) => {
  let userinfo = await Myuser.findById(req.body.id);

  userinfo.fullname = req.body.fname;
  userinfo.email = req.body.emailid;
  userinfo.password = req.body.password;
  userinfo.mobile = req.body.mobileno;
  userinfo.address = req.body.address;

  let info = await userinfo.save();
  res.status(200).json({ message: "Record Updated Successfully...." });
});
