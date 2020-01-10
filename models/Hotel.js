const mongose = require("mongoose");
const hotelSchema = mongose.Schema({
  _id: mongose.Schema.Types.ObjectId,
  id: { type: String, require: true, max: 255 },
  hotelName: { type: String, require: true, max: 255 },
  imgSrc: { type: String, require: true },
  price: { type: Number, require: true },
  location: { type: Number, require: true },
  rooms: { type: Array, require: true },
  category: { type: String, require: true },
  dec: { type: String, require: true },
  comment: { type: Array, require: true },
  service: { type: Array, require: true },
})

module.exports = mongose.model("Hotels", hotelSchema, "Hotels");

