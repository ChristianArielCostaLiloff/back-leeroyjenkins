let router = require("express").Router();
const { schema, schemaPatch } = require("../schemas/show");
const validator = require("../middlewares/validator");
const passport = require("passport");
const { showBelongsUser } = require("../middlewares/showBelongsUser");

const {
  read,
  create,
  update,
  destroy,
  readOne,
} = require("../controllers/show");

router
  .route("/")
  .get(read)
  .post(
    passport.authenticate("jwt", { session: false }),
    validator(schema),
    create
  );
router
  .route("/:id")
  .get(readOne)
  .patch(
    passport.authenticate("jwt", { session: false }),
    validator(schemaPatch),
    showBelongsUser,
    update
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    showBelongsUser,
    destroy
  );

module.exports = router;
