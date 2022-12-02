const Reaction = require("../models/Reaction");

const controller = {
  create: async (req, res) => {
    req.body = {
      ...req.body,
      userId: req.user._id,
    };
    try {
      let new_reaction = await Reaction.create(req.body);
      res.status(201).json({
        response: new_reaction,
        success: true,
        message: "Reaction created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let query = {};
    if (req.query.name) {
      query = { name: req.query.name };
    }
    if (req.query.itineraryId) {
      query = { ...query, itineraryId: req.query.itineraryId };
    }
    try {
      let reaction = await Reaction.findOne(query);
      if (reaction) {
        let toggle;
        if (reaction.userId.includes(req.user._id)) {
          await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $pull: { userId: req.user._id } },
            { new: true }
          );
          toggle = false;
        } else {
          await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $push: { userId: req.user._id } },
            { new: true }
          );
          toggle = true;
        }
        res.status(200).json({
          reaction: reaction,
          message: `Reactioned ${reaction.name}`,
          success: true,
          toggle,
        });
      } else {
        res.status(404).json({
          message: "Reaction not found.",
          success: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },
  read: async (req, res) => {
    let query = {};
    if (req.query.itineraryId) {
      query = { itineraryId: req.query.itineraryId };
    }
    try {
      let reactions = await Reaction.find(query);
      if (reactions.length > 0) {
        let reactionsQuantity = {};
        reactions.forEach(
          (reaction) =>
            (reactionsQuantity[reaction.name] = reaction.userId.length)
        );
        res.status(200).json({
          reactionsQuantity,
          response: reactions,
          id: req.query.itineraryId,
          success: true,
          message: `All reactions of the itineraryId ${req.query.itineraryId}`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No reactions founded",
          response: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
};

module.exports = controller;
