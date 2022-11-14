let router = require("express").Router();

const { read, create } = require("../controllers/itinerary");

router.post("/", create)
router.get("/", read)

module.exports = router;