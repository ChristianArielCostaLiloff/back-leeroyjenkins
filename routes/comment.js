let router = require("express").Router();
const schema = require("../schemas/comment");
const validator = require("../middlewares/validator");
const passport = require("../middlewares/passport");
const Comment = require("../models/Comment");
let { read, create, update, destroy, readOne } = require("../controllers/comment");
const commentOwner = require("../middlewares/commentOwner");

router.get("/", read);
router.post(
  "/",
  validator(schema),
  passport.authenticate("jwt", { session: false }),
  create
);
router.put(
  "/:id",
  validator(schema),
  passport.authenticate("jwt", { session: false }),
  commentOwner(Comment),
  update
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  commentOwner(Comment),
  destroy
);
router.get("/:id", readOne)

module.exports = router;
