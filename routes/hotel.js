let router = require("express").Router();
const schema = require("../schemas/hotel");
const validator = require("../middlewares/validator");
const { hotelBelongsUser } = require("../middlewares/hotelBelongsUser");
const passport = require("../middlewares/passport");

let {
  create,
  read,
  readOne,
  update,
  destroy,
} = require("../controllers/hotel");

router
  .route("/")
  .post(
    validator(schema),
    passport.authenticate("jwt", { session: false }),
    create
  )
  .get(read);

router
  .route("/:id")
  .get(readOne)
  .patch(
    validator(schema),
    passport.authenticate("jwt", { session: false }),
    hotelBelongsUser,
    update
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    hotelBelongsUser,
    destroy
  );

module.exports = router;
