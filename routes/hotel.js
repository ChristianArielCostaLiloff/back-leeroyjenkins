let router = require("express").Router();
const validator = require("../middlewares/validator");
const schema = require("../schemas/hotel");
let {
  create,
  read,
  readOne,
  update,
  destroy,
} = require("../controllers/hotel");

router.route("/").post(validator(schema), create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
