const Show = require("../models/Show");

async function showBelongsUser(req, res, next) {
  let { id } = req.params;
  let { user } = req;
  let show = await Show.findOne({ _id: id });
  if (!user._id.equals(show.userId)) {
    return res.status(400).json({
      success: false,
      message: "Show doesn't belong to this user",
    });
  } else {
    return next();
  }
}

module.exports = { showBelongsUser };
