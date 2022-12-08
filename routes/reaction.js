const router = require("express").Router();
const passport = require("passport");
const validator = require("../middlewares/validator");
const schema = require("../schemas/reaction");
const { reactionBelongsUser } = require("../middlewares/reactionBelognsUser");

const {
  create,
  update,
  read,
  readOne,
  deleteReaction,
} = require("../controllers/reaction");

router
  .route("/")
  .post(
    validator(schema),
    passport.authenticate("jwt", { session: false }),
    create
  )
  .put(passport.authenticate("jwt", { session: false }), update)
  .get(read);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  reactionBelongsUser,
  deleteReaction
);
router.route("/:id").get(readOne);

module.exports = router;
