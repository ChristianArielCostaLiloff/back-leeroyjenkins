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
    if (req.query.showId) {
      query = { ...query, showId: req.query.showId };
    }
    try {
      let reaction = await Reaction.findOne(query);
      if (reaction) {
        let toggle;
        let reactionModified;
        if (reaction.userId.includes(req.user._id)) {
          reactionModified = await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $pull: { userId: req.user._id } },
            { new: true }
          );
          toggle = false;
        } else {
          reactionModified = await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $push: { userId: req.user._id } },
            { new: true }
          );
          toggle = true;
        }
        reactionModified = {
          ...reactionModified._doc,
          quantity: reactionModified._doc.userId.length,
        };
        res.status(200).json({
          reaction: reactionModified,
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
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    if (req.query.showId) {
      query = { showId: req.query.showId };
    }
    try {
      if (req.query.userId) {
        let reactions = await Reaction.find(query)
          .populate({
            path: "itineraryId",
            select: " name photo",
          })
          .populate({
            path: "showId",
            select: " name photo",
          });
        if (reactions.length > 0) {
          reactions = reactions.map((reaction) => {
            return { ...reaction._doc, quantity: reaction._doc.userId.length };
          });
          res.status(200).json({
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
      } else {
        let reactions = await Reaction.find(query);
        if (reactions.length > 0) {
          reactions = reactions.map((reaction) => {
            return { ...reaction._doc, quantity: reaction._doc.userId.length };
          });
          res.status(200).json({
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
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
  readOne: async (req, res) => {
    const { id } = req.params;
    try {
      let reaction = await Reaction.findOne({ _id: id });
      if (reaction) {
        res.status(200).json({
          success: true,
          message: "Reaction founded",
          response: reaction,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Reaction not founded",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteReaction: async (req, res) => {
    let { id } = req.params;
    try {
      let response = await Reaction.findOneAndUpdate(
        { _id: id },
        { $pull: { userId: req.user._id } },
        { new: true }
      );
      res.status(200).json({
        message: `reaction deleted`,
        response,
        success: true,
        toggle: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },
};

module.exports = controller;
