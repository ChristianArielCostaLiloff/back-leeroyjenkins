let router = require("express").Router();

const { read, create, update } = require("../controllers/show");

router.get("/", read)
router.post("/", create)
router.patch("/:id", update)


module.exports = router;