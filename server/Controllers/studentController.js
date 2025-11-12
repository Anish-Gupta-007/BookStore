const studentSchema = require("../models/studentModel");
const bcrypt = require("bcrypt");

exports.AddStudent = async (req, res) => {
  try {
    const { userName, password, roll, grade } = req.body;
    const student = await studentSchema.findOne({ userName });
    if (student) {
      return res.json({ message: "student is already register" });
    }
    const hasedPassWord = await bcrypt.hash(password, 10);
    const newStudent = new studentSchema({
      userName: userName,
      password: hasedPassWord,
      roll: roll,
      grade: grade,
    });
    await newStudent.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "error in registring student" });
  }
};
