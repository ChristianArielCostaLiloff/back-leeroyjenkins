let router = require("express").Router();
let { create, read, readOne, update } = require("../controllers/city");

router.route("/").post(create);
router.route("/").get(read);
router.route("/:id").get(readOne);
router.put("/:id", update);

module.exports = router;
