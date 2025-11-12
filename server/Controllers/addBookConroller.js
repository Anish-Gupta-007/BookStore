const bookModal = require("../models/bookModal");
const BookSchema = require("../models/bookModal");

exports.AddBoook = async (req, res) => {
  try {
    const { name, aouthor, image } = req.body;
    const newBook = new BookSchema({
      name: name,
      aouthor: aouthor,
      image: image,
    });
    await newBook.save();
    return res.json({ added: true });
  } catch (err) {
    return res.json({ message: "error in adding book" });
  }
};
exports.allBooks = async (req, res) => {
  try {
    const book = await bookModal.find();
    return res.json(book);
  } catch (err) {
    return res.json(err);
    console.log(err);
  }
};

exports.UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModal.findById(id);
    return res.json(book);
  } catch (err) {
    console.log(err);
  }
};
exports.UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModal.findByIdAndUpdate({ _id: id }, req.body);
    return res.json({ updated: true, book });
  } catch (err) {
    console.log(err);
  }
};

exports.DeleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await bookModal.findByIdAndDelete(id);
    return res.json({ deleted: true, book });
  } catch (err) {
    console.log(err);
  }
};
