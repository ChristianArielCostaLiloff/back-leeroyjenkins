const router = require("express").Router();
const passport = require("passport");
const validator = require("../middlewares/validator");
const schema = require("../schemas/reaction");

const { create, update, read } = require("../controllers/reaction");

router
  .route("/")
  .post(
    validator(schema),
    passport.authenticate("jwt", { session: false }),
    create
  )
  .put(passport.authenticate("jwt", { session: false }), update)
  .get(read);

module.exports = router;
