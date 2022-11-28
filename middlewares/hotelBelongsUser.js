const Hotel = require("../models/Hotel");

async function hotelBelongsUser(req, res, next) {
  let { id } = req.params;
  let { user } = req;
  let hotel = await Hotel.findOne({ _id: id });
  if (!user._id.equals(hotel.userId)) {
    return res.status(400).json({
      success: false,
      message: "Hotel doesn't belong to this user",
    });
  } else {
    return next();
  }
}

module.exports = { hotelBelongsUser };