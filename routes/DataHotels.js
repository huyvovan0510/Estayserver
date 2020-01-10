const router = require("express").Router();
const Hotel = require("../models/Hotel");
router.get("/getData", async (req, res) => {
  const Hotels = await Hotel.find()

  res.status(200).json(Hotels)
})
module.exports = router;
