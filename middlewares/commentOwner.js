const { isCommentOwner, noActivity } = require("../config/responses");

const commentOwner = (model) => [
  async (req, res, next) => {
    let activity = await model.findOne({ _id: req.params.id });
    if (activity) {
      if (activity.userId.equals(req.user._id)) {
        return next();
      }
      return isCommentOwner(req, res);
    }
    return noActivity(req, res);
  },
];

module.exports = commentOwner;
