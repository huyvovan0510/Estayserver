const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const JWWT = require("jsonwebtoken");
router.post("/registration", async (req, res) => {
  console.log("userCreate");
  //check email exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.send("Email already exist..!");
  // hash the pasword
  const salt = await bcrypt.genSalt(10);
  const HashPasword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    email: req.body.email,
    password: HashPasword,
    username: req.body.username,
    phonenumber: req.body.phonenumber
  });
  try {
    const saveUser = await user.save();
    res.status(200).send({ user: user.id });
  } catch (error) {
    res.status(400).send(error);
  }
});

///Login
router.post("/login", async (req, res) => {
  //check email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(201).send("Email is not found !");
  //check password
  const comperPassWord = await bcrypt.compare(req.body.password, user.password);
  console.log(comperPassWord);
  if (!comperPassWord) return res.status(201).send("Invalid Password");
  const token = JWWT.sign(
    {
      _id: user.id,
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber
    },
    process.env.TOKEN_SECRET
  );
  res
    .header("auth-token", token)
    .status(200)
    .send({
      _id: user.id,
      username: user.username,
      email: user.email,
      phonenumber: user.phonenumber
    });
});
router.get("/get", async (req, res) => {
  const user = await User.find()
  console.log("use", user)
})
module.exports = router;
