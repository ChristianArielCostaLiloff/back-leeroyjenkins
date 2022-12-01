let router = require("express").Router();
const { schema, schemaPut } = require("../schemas/itinerary");
const validator = require("../middlewares/validator");
const passport = require("passport");
const { itineraryBelongsUser } = require("../middlewares/itineraryBelongsUser");

const {
  read,
  create,
  update,
  destroy,
  readOne,
} = require("../controllers/itinerary");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  create
);
router.get("/", read);
router.get("/:id", readOne);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validator(schemaPut),
  itineraryBelongsUser,
  update
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  itineraryBelongsUser,
  destroy
);

module.exports = router;
