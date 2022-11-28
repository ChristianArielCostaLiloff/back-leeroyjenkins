let router = require("express").Router();
const validator = require("../middlewares/validator");
const schema = require("../schemas/hotel");
const passport = require("../middlewares/passport");
const {hotelBelongsUser} = require("../middlewares/hotelBelongsUser");
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
router.route("/:id").patch(passport.authenticate("jwt", { session: false }),
hotelBelongsUser,
update);
router.route("/:id").delete(passport.authenticate("jwt", { session: false }),
hotelBelongsUser,
destroy)

module.exports = router;
