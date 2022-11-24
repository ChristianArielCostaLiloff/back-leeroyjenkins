let router = require("express").Router();

const { read, create, update, destroy, readOne } = require("../controllers/show");

router.get("/", read)
router.get("/:id", readOne)
router.post("/", create)
router.patch("/:id", update)
router.delete("/:id", destroy)

module.exports = router;