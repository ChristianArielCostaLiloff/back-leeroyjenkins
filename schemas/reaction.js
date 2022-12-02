const joi = require("joi");

const schema = joi.object({
  itineraryId: joi.string().hex().length(24).required().messages({
    "string.base": "itineraryId must be a text",
    "any.required": "itineraryId is required",
    "string.empty": "itineraryId must not be empty",
    "string.length": "itineraryId length must be 24 characters long",
  }),
  name: joi.string().required().min(2).max(30).messages({
    "string.base": "Name must be a text",
    "any.required": "Name is required",
    "string.empty": "The name must not be empty",
    "string.min": "Name must have at least 2 characters",
    "string.max": "Name must not have more than 30 characters",
  }),
  icon: joi.string().required().uri().messages({
    "string.base": "The icon url must be a text",
    "any.required": "The icon url is required",
    "string.empty": "The icon url must not be empty",
    "string.uri": "The icon url must be a valid url",
  }),
  iconBack: joi.string().required().uri().messages({
    "string.base": "The back icon url must be a text",
    "any.required": "The back icon url is required",
    "string.empty": "The back icon url must not be empty",
    "string.uri": "The back icon url must be a valid url",
  }),
});

module.exports = schema;