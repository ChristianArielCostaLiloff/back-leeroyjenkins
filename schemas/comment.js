const joi = require("joi");

const schema = joi.object({
  showId: joi.any(),
  itineraryId: joi.any(),
  comment: joi.string().required().min(3).messages({
    "string.min": "Comment: min 3 characters",
  }),
  date: joi.date().required(),
});

module.exports = schema;
