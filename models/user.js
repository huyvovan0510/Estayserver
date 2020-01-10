const mongose = require("mongoose");

const userSchema = new mongose.Schema({
  email: { type: String, require: true, max: 255 },
  password: { type: String, require: true, min: 6, max: 255 },
  username: { type: String, require: true, max: 255 },
  phonenumber: { type: String, require: true, max: 11 },
  createDate: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongose.model("User", userSchema);
