let router = require("express").Router();

const { read, create, update, destroy } = require("../controllers/show");

router.get("/", read)
router.post("/", create)
router.patch("/:id", update)
router.delete("/:id", destroy)

module.exports = router;