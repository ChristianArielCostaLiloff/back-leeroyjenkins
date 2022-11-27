const User = require("../models/User");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const accountVerificationEmail = require("../config/accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
} = require("../config/responses");
const { FRONT_URL } = process.env;
const jwt = require("jsonwebtoken");

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
      next(error);
    }
  },
  signin: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;
    try {
      const verifyPassword = bcryptjs.compareSync(password, user.password);
      if (verifyPassword) {
        const userDb = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDb._id,
            name: userDb.name,
            photo: userDb.photo,
            role: user.role,
            logged: userDb.logged,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        );
        return res.status(200).json({
          response: { user, token },
          success: true,
          message: "Welcome " + user.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  loginWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        user: {
          response: {
            name: user.name,
            photo: user.photo,
            role: user.role,
            logged: user.logged,
          },
        },
        succes: true,
        message: "Welcome " + user.name,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
