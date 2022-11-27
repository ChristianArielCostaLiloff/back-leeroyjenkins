let router = require("express").Router();
const validator = require("../middlewares/validator");
const schema = require("../schemas/user");
let { register, verify } = require("../controllers/user");
const { accountExists } = require("../middlewares/accountExistsSingUp");

router.post("/signup", validator(schema), accountExists, register);
router.get("/verify/:code", verify);

module.exports = router;
