const Show = require("../models/Show");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.hotelId) {
      query = { hotelId: req.query.hotelId };
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
  create: async (req, res) => {
    try {
      let new_show = await Show.create(req.body);
      res.status(201).json({
        id: new_show._id,
        success: true,
        message: "Show created successfuly",
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
        new: true
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
  destroy:  async (req, res) => {
    let { id } = req.params;
    try {
      let show = await Show.deleteOne({ _id: id });
      if (show) {
        res.status(200).json({
          success: true,
          message: "Show deleted",
          hotelId: show._id,
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