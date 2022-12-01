const router = require("express").Router();
const schema = require("../schemas/city");
const validator = require("../middlewares/validator");
const { cityBelongsUser } = require("../middlewares/cityBelongsUser");
const passport = require("passport");

const {
  create,
  read,
  readOne,
  update,
  destroy,
} = require("../controllers/city");

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
  .put(
    validator(schema),
    passport.authenticate("jwt", { session: false }),
    cityBelongsUser,
    update
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    cityBelongsUser,
    destroy
  );

module.exports = router;
