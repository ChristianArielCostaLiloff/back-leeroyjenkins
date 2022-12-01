const City = require("../models/City");

async function cityBelongsUser(req, res, next) {
  let { id } = req.params;
  let { user } = req;
  let city = await City.findOne({ _id: id });
  if (!user._id.equals(city.userId)) {
    return res.status(400).json({
      success: false,
      message: "City doesn't belong to this user",
    });
  } else {
    return next();
  }
}

module.exports = { cityBelongsUser };
