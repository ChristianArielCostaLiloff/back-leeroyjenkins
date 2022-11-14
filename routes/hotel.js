let router = require("express").Router();
let { create, read, readOne, update } = require("../controllers/hotel");

router.route("/").post(create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);

module.exports = router;
