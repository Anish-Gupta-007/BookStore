const express = require("express");
const {
  Login,
  LogOut,
  verify,
  verifyStudent,
} = require("../Controllers/authController");

const adminRouter = express.Router();

adminRouter.post("/login", Login);
adminRouter.get("/logout", LogOut);
adminRouter.get("/verify", verifyStudent, verify);

module.exports = adminRouter;
