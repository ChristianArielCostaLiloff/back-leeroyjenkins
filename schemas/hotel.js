const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(50).messages({
    "string.base": "Name must be a text",
    "any.required": "Name is required",
    "string.empty": "The name must not be empty",
    "string.min": "Name must have at least 3 characters",
    "string.max": "Name must not have more than 30 characters",
  }),
  photo: joi.string().required().uri().messages({
    "string.base": "The url must be a text",
    "any.required": "The url is required",
    "string.empty": "The url must not be empty",
    "string.uri": "Must be a valid url",
  }),
  capacity: joi.number().required().messages({
    "any.required": "Capacity is required",
    "number.base": "Capacity must be a number",
  }),
  cityId: joi.string().hex().length(24).required().messages({
    "string.base": "cityId must be a text",
    "any.required": "cityId is required",
    "string.empty": "cityId must not be empty",
    "string.length": "cityId length must be 24 characters long",
  }),
});

module.exports = schema;
