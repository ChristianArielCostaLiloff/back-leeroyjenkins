const joi = require("joi");

const schema = joi.object({
  cityId: joi.string().hex().length(24).required().messages({
    "string.base": "cityId must be a text",
    "any.required": "cityId is required",
    "string.empty": "cityId must not be empty",
    "string.length": "cityId length must be 24 characters long",
  }),
  name: joi.string().required().min(3).max(30).messages({
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
    "string.uri": "Photo must be a valid url",
  }),
  description: joi.string().min(5).max(50).required().messages({
    "string.base": "Name must be a text",
    "any.required": "Name is required",
    "string.empty": "The name must not be empty",
    "string.min": "Name must have at least 5 characters",
    "string.max": "Name must not have more than 50 characters",
  }),
  price: joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number",
  }),
  duration: joi.number().required().messages({
    "any.required": "Duration is required",
    "number.base": "Duration must be a number",
  }),
});

const schemaPut = joi.object({
  name: joi.string().required().min(3).max(30).messages({
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
    "string.uri": "Photo must be a valid url",
  }),
  description: joi.string().min(5).max(50).required().messages({
    "string.base": "Name must be a text",
    "any.required": "Name is required",
    "string.empty": "The name must not be empty",
    "string.min": "Name must have at least 5 characters",
    "string.max": "Name must not have more than 50 characters",
  }),
  price: joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number",
  }),
  duration: joi.number().required().messages({
    "any.required": "Duration is required",
    "number.base": "Duration must be a number",
  }),
});

module.exports = { schema, schemaPut };
