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
    if (req.query.itineraryId) {
      query = { itineraryId: req.query.itineraryId };
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
    req.body = {
      ...req.body,
      userId: req.user._id,
    };
    try {
      let comments = await (
        await Comment.create(req.body)
      ).populate("userId", {
        photo: 1,
        name: 1,
      });
      res.status(201).json({
        response: comments,
        success: true,
        message: "Comment created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let one = await Comment.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      }).populate("userId", {
        photo: 1,
        name: 1,
      });
      if (one) {
        res.status(200).json({
          response: one,
          success: true,
          message: "Comment modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No comment found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let comment = await Comment.findOneAndDelete({ _id: id });
      if (comment) {
        res.status(200).json({
          res: comment,
          success: true,
          message: "The comment was successfully deleted",
        });
      } else {
        res.status(404).json({
          res: comment,
          success: false,
          message: "The comment was not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  readOne: async (req, res) => {
    const { id } = req.params;
    try {
      let comment = await Comment.findOne({ _id: id }).populate("userId", {
        photo: 1,
        name: 1,
      });
      if (comment) {
        res.status(200).json({
          success: true,
          message: "Comment founded",
          response: comment,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Comment not founded",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = controller;
