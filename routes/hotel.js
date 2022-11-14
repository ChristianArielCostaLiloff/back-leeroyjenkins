let router = require("express").Router();
let { create, read, readOne, update, destroy } = require("../controllers/hotel");

router.route("/").post(create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);
router.delete("/:id", destroy);

module.exports = router;