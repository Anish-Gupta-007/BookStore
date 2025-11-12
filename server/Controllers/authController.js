const adminSchema = require("../models/adminModal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const studentModel = require("../models/studentModel");

exports.Login = async (req, res) => {
  try {
    const { userName, password, role } = req.body;
    if (role === "admin") {
      const admin = await adminSchema.findOne({ userName });
      if (!admin) {
        return res.json({ message: "admin not register" });
      }
      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword) {
        return res.json({ message: "wrong password" });
      }
      const token = jwt.sign(
        { userName: admin.userName, role: "admin" },
        process.env.ADMIN_KEY
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "admin" });
    } else if (role === "student") {
      const student = await studentModel.findOne({ userName });
      if (!student) {
        return res.json({ message: "student not register" });
      }
      const validPassword = await bcrypt.compare(password, student.password);
      if (!validPassword) {
        return res.json({ message: "wrong password" });
      }
      const token = jwt.sign(
        { userName: student.userName, role: "student" },
        process.env.STUDENT_KEY
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "student" });
    } else {
      return res.status(400).json({ message: "invalid role" });
    }
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

exports.LogOut = (req, res) => {
  res.clearCookie("token");
  return res.json({ logout: true });
};

exports.verify = (req, res) => {
  return res.json({ login: true, role: req.role });
};
exports.verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "invalid admin" });
  } else {
    jwt.verify(token, process.env.ADMIN_KEY, (err, decoded) => {
      if (err) {
        return res.json({ message: "invalid token" });
      } else {
        req.userName = decoded.userName;
        req.role = decoded.role;
        next();
      }
    });
  }
};

exports.verifyStudent = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "invalid Student" });
  } else {
    jwt.verify(token, process.env.ADMIN_KEY, (err, decoded) => {
      if (err) {
        jwt.verify(token, process.env.STUDENT_KEY, (err, decoded) => {
          if (err) {
            return res.json({ message: "invalid token" });
          } else {
            req.userName = decoded.userName;
            req.role = decoded.role;
            next();
          }
        });
      } else {
        req.userName = decoded.userName;
        req.role = decoded.role;
        next();
      }
    });
  }
};
