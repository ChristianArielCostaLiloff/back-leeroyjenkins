let router = require("express").Router();

const { read } = require("../controllers/show");

router.get("/", read)

module.exports = router;