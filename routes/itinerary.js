let router = require("express").Router();

const { read } = require("../controllers/itinerary");

router.get("/", read)

module.exports = router;