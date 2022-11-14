let router = require("express").Router();

const { read, create } = require("../controllers/show");

router.get("/", read)
router.post("/", create)

module.exports = router;