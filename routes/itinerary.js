let router = require("express").Router();

const { read, create, update, destroy, readOne } = require("../controllers/itinerary");

router.post("/", create)
router.get("/", read)
router.get("/:id", readOne)
router.put("/:id", update)
router.delete("/:id", destroy)

module.exports = router;