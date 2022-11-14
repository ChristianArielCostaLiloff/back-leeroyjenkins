let router = require("express").Router();
let { create, read, readOne } = require("../controllers/hotel");

router.route("/").post(create);
router.get("/", read);
router.get("/:id", readOne);

module.exports = router;
