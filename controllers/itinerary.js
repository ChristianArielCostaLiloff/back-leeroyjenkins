const Itinerary = require("../models/Itinerary");

const controller = {
  create: async (req, res) => {
    try {
      let new_itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: new_itinerary._id,
        success: true,
        message: "Itinerary created successfuly",
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
    if (req.query.cityId) {
      query = { cityId: req.query.cityId };
    }
    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }
    try {
      let itineraries = await Itinerary.find(query);
      if (itineraries) {
        res.status(200).json({
          success: true,
          message: "Itineraries founded",
          response: itineraries,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Itineraries not founded",
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
      let itinerary = await Itinerary.findOne({ _id: id });
      if (itinerary) {
        res.status(200).json({
          success: true,
          message: "Itinerary founded",
          response: itinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "itinerary not founded",
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
      let itinerary = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (itinerary) {
        res.status(200).json({
          success: true,
          message: "Itinerary updated",
          data: itinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Itinerary not found",
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
      let itinerary = await Itinerary.deleteOne({ _id: id });
      if (itinerary) {
        res.status(200).json({
          success: true,
          message: "Itinerary deleted",
          itineraryId: itinerary._id,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Itinerary not found",
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
