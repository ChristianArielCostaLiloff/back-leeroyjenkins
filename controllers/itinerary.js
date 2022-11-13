const Itinerary = require("../models/Itinerary");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.cityId) {
      query = { cityId: req.query.cityId };
    }
    try {
      let itineraries = await Itinerary.find(query).populate({
        path: "userId",
        select: ""
      });
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
};

module.exports = controller;
