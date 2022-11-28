let router = require("express").Router();
const validator = require("../middlewares/validator");
const schema = require("../schemas/user");
let {
  register,
  verify,
  signin,
  loginWithToken,
} = require("../controllers/user");
const { accountExists } = require("../middlewares/accountExistsSingUp");
const schemaSignIn = require("../schemas/signIn");
const { accountExistsSignIn } = require("../middlewares/accountExistsSignIn");
const {
  accountHasBeenVerified,
} = require("../middlewares/accountHasBeenVerified");
const passport = require("../middlewares/passport");
const mustSignIn = require("../middlewares/mustSignIn");

router.post("/signup", validator(schema), accountExists, register);
router.get("/verify/:code", verify);
router.post(
  "/signin",
  validator(schemaSignIn),
  accountExistsSignIn,
  accountHasBeenVerified,
  signin
);
router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  mustSignIn,
  loginWithToken
);

module.exports = router;
