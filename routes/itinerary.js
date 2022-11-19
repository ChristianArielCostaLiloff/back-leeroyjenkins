let router = require("express").Router();

const { read, create, update, destroy } = require("../controllers/itinerary");

router.post("/", create)
router.get("/", read)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router;