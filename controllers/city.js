const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "City created successfuly",
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
    if (req.query.continent) {
      query = { continent: req.query.continent };
    }
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    try {
      let cities = await City.find(query);
      if (cities) {
        res.status(200).json({
          success: true,
          message: "Cities founded",
          response: cities,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Cities not founded",
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
      let city = await City.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });

      if (city) {
        res.status(200).json({
          success: true,
          message: "City founded",
          response: city,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "City not founded",
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
      let city = await City.findOneAndUpdate({ _id: id }, req.body, {
        new: true
      });
      if (city) {
        res.status(200).json({
          success: true,
          message: "City updated",
          data: city,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "City not found",
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
      let city = await City.deleteOne({ _id: id });
      if (city) {
        res.status(200).json({
          success: true,
          message: "City deleted",
          cityId: city._id,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "City not found",
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
