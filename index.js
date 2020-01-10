var express = require("express");
const app = express();
const mongose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const DataHotel = require("./routes/DataHotels")
const post = process.env.PORT || 3000;
dotenv.config();
app.use(express.json());
//connecttion  MongoDb
mongose.connect(
  process.env.CONNECT_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connect Database ");
  }
);
app.get("/", (req, res) => {
  res.send("Wellcomeaaaaa");
});
app.use("/api/users", authRouter);
app.use("/hotels", DataHotel)
var server = app.listen(3000, () => {
  console.log("server starting.....");
});

