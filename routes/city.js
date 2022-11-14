let router = require("express").Router();
let { create, read, readOne, update, destroy } = require("../controllers/city");

router.route("/").post(create);
router.route("/").get(read);
router.route("/:id").get(readOne);
router.put("/:id", update);
router.delete("/:id", destroy)

module.exports = router;
