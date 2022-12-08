const Itinerary = require("../models/Itinerary");

async function itineraryBelongsUser(req, res, next) {
  let { id } = req.params;
  let { user } = req;
  let itinerary = await Itinerary.findOne({ _id: id });
  if (!user._id.equals(itinerary.userId)) {
    return res.status(400).json({
      success: false,
      message: "Itinerary doesn't belong to this user",
    });
  } else {
    return next();
  }
}

module.exports = { itineraryBelongsUser };
