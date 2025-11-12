const express = require("express");
const { AddStudent } = require("../Controllers/studentController");
const { verifyAdmin } = require("../Controllers/authController");

const studentRouter = express.Router();

studentRouter.post("/register", verifyAdmin, AddStudent);

module.exports = studentRouter;
