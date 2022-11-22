const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).max(30).messages({
    "string.base": "Name must be a text",
    "any.required": "Name is required",
    "string.empty": "The name must not be empty",
    "string.min": "Name must have at least 3 characters",
    "string.max": "Name must not have more than 30 characters",
  }),
  continent: joi.string().required().min(4).max(25).messages({
    "string.base": "Continent must be a text",
    "any.required": "Continent is required",
    "string.empty": "Continent must not be empty",
    "string.min": "Continent must have at least 4 characters",
    "string.max": "Continent must not have more than 25 characters",
  }),
  photo: joi.string().required().uri().messages({
    "string.base": "The url must be a text",
    "any.required": "The url is required",
    "string.empty": "The url must not be empty",
    "string.uri": "Must be a valid url",
  }),
  population: joi.number().required().messages({
    "any.required": "Population is required",
    "number.base": "Population must be a number",
  }),
  //ObjectId is a string of hexadecimal caracters with a length of 24
  userId: joi.string().hex().length(24).required().messages({
    "string.base": "userId must be a text",
    "any.required": "userId is required",
    "string.empty": "userId must not be empty",
    "string.length": "userId length must be 24 characters long"
  }),
});

module.exports = schema;
