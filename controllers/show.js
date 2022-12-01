const Show = require("../models/Show");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.hotelId) {
      query = { hotelId: req.query.hotelId };
    }
    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }
    try {
      let shows = await Show.find(query);
      if (shows) {
        res.status(200).json({
          success: true,
          message: "Shows founded",
          response: shows,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Shows not founded",
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
    let { id } = req.params;
    try {
      let show = await Show.findOne({ _id: id });
      if (show) {
        res.status(200).json({
          success: true,
          message: "Show founded",
          response: show,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "show not founded",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  create: async (req, res) => {
    req.body = {
      ...req.body,
      userId: req.user._id,
    };
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "Show created successfuly",
        response: new_show,
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
      let show = await Show.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (show) {
        res.status(200).json({
          success: true,
          message: "Show updated",
          data: show,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Show not found",
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
      let show = await Show.findOneAndDelete({ _id: id });
      if (show) {
        res.status(200).json({
          success: true,
          message: "Show deleted",
          showId: show,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Show not found",
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
