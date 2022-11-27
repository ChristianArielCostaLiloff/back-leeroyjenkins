const User = require("../models/User");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const accountVerificationEmail = require("../config/accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
} = require("../config/responses");
const { FRONT_URL } = process.env;

const controller = {
  register: async (req, res, next) => {
    let { name, lastName, role, photo, age, email, password } = req.body;
    let code = crypto.randomBytes(10).toString("hex");
    let verified = false;
    let logged = false;
    password = bcryptjs.hashSync(password, 10);
    try {
      await User.create({
        name,
        lastName,
        role,
        photo,
        age,
        email,
        password,
        code,
        verified,
        logged,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  verify: async (req, res, next) => {
    const { code } = req.params;
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect(FRONT_URL);
      } else {
        return userNotFoundResponse(req, res);
      }
    } catch (error) {
      next(error)
    }
  },
};

module.exports = controller;
