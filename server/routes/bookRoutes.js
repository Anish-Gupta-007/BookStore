const express = require("express");
const { verifyAdmin } = require("../Controllers/authController");
const {
  AddBoook,
  allBooks,
  UpdateBook,
  DeleteBook,
} = require("../Controllers/addBookConroller");
const BookRouter = express.Router();

BookRouter.post("/addbook", verifyAdmin, AddBoook);
BookRouter.get("/books", allBooks);
BookRouter.get("/updates/:id", UpdateBook);
BookRouter.put("/updates/:id", UpdateBook);
BookRouter.delete("/delete/:id", DeleteBook);

module.exports = BookRouter;
