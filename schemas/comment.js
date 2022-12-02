const joi = require("joi");

const schema = joi.object({
  showId: joi.any(),
  userId: joi.any(),
  comment: joi.string().required().min(3).messages({
    "string.min": "Comment: min 3 characters",
  }),
  userId: joi.any(),
  date: joi.date().required(),
});

module.exports = schema;
