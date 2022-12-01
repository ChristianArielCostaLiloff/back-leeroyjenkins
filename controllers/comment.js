const Comment = require("../models/Comment");
const Show = require("../models/Show");
const User = require("../models/User");

const controller = {
  read: async (req, res) => {
    let comments;

    let query = {};

    if (req.query.showId) {
      query = { showId: req.query.showId };
    }
    if (req.query.order) {
      order = {
        date: req.query.order,
      };
    }
    try {
      comments = await Comment.find(query)
        .sort({ date: "desc" })
        .populate("userId", {
          photo: 1,
          name: 1,
        });
      res.json({ success: true, response: comments });
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  },
  create: async (req, res) => {
    let id = req.body.userId;
    let { showId, comment, userId, date } = req.body;

    try {
      let user = await User.findOne({ _id: id });
      userId = user._id;

      let comments = await (
        await Comment.create({ showId, comment, userId, date })
      ).populate("userId", {
        photo: 1,
        name: 1,
      });
      res.status(201).json({
        response: comments,
        success: true,
        message: "the comment was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
