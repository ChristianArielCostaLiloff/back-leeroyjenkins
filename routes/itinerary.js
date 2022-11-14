let router = require("express").Router();

const { read, create, update } = require("../controllers/itinerary");

router.post("/", create)
router.get("/", read)
router.put("/:id", update)

module.exports = router;