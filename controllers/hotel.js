const Hotel = require("../models/Hotel");

const controller = {
  create: async (req, res) => {
    try {
      let new_hotel = await Hotel.create(req.body);
      res.status(201).json({
        id: new_hotel._id,
        success: true,
        message: "Hotel created successfuly",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    let order = {};

    if (req.query.name) {
      query = {
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    if (req.query.order) {
      order = {
        capacity: req.query.order,
      };
    }
    try {
      let hotels = await Hotel.find(query).sort(order);
      if (hotels) {
        res.status(200).json({
          success: true,
          message: "Hotels founded",
          response: hotels,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Hotels not founded",
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
      let hotel = await Hotel.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });

      if (hotel) {
        res.status(200).json({
          success: true,
          message: "Hotel founded",
          response: hotel,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Hotel not founded",
        });
      }
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
      let hotel = await Hotel.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });
      if (hotel) {
        res.status(200).json({
          success: true,
          message: "Hotel updated",
          data: hotel,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Hotel not found",
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
      let hotel = await Hotel.deleteOne({ _id: id });
      if (hotel) {
        res.status(200).json({
          success: true,
          message: "Hotel deleted",
          hotelId: hotel._id,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Hotel not found",
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