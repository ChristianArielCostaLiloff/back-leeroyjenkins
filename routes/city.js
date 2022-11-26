const router = require("express").Router();
const schema = require("../schemas/city");
const validator = require("../middlewares/validator");

const {
  create,
  read,
  readOne,
  update,
  destroy,
} = require("../controllers/city");

router.route("/").post(validator(schema), create).get(read);

router.route("/:id").get(readOne).put(update).delete(destroy);

module.exports = router;
