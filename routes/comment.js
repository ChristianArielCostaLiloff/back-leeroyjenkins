let router = require("express").Router();
const schema = require("../schemas/comment");
const validator = require("../middlewares/validator");
const passport = require("../middlewares/passport");
const Comment = require("../models/Comment");
let { read, create } = require("../controllers/comment");

router.get("/", read);
router.post("/", validator(schema), passport.authenticate("jwt", { session: false }), create);

module.exports = router;
