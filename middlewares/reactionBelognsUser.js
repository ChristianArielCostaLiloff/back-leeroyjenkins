const Reaction = require("../models/Reaction");

async function reactionBelongsUser(req, res, next) {
  let { id } = req.params;
  let { user } = req;
  let reaction = await Reaction.findOne({ _id: id });
  console.log("condicion" + reaction.userId.includes(user._id))
  if (!reaction.userId.includes(user._id)) {
    return res.status(400).json({
      success: false,
      message: "Reaction doesn't belong to this user or doesn't exists",
    });
  } else {
    return next();
  }
}

module.exports = { reactionBelongsUser };
