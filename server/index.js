const express = require("express");
const dotenv = require("dotenv").config();
require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const adminRouter = require("./routes/authRouter");
const studentRouter = require("./routes/studentRouter");
const BookRouter = require("./routes/bookRoutes");
const bookModal = require("./models/bookModal");
const studentModel = require("./models/studentModel");
const adminModal = require("./models/adminModal");
const { verifyAdmin } = require("./Controllers/authController");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", adminRouter);
app.use("/student", studentRouter);
app.use("/book", BookRouter);
app.get("/deshboard", verifyAdmin, async (req, res) => {
  try {
    const book = await bookModal.countDocuments();
    const admin = await adminModal.countDocuments();
    const student = await studentModel.countDocuments();
    return res.json({ ok: true, student, book, admin });
  } catch (err) {
    return res.json(err);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on  http://localhost:${PORT}`);
});
