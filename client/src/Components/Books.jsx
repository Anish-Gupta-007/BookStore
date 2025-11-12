import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "../css/Book.css";

const Books = ({ role }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/book/books")
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      <div>
        <h1>All books</h1>
      </div>{" "}
      <br></br>
      {book.map((book) => {
        return <BookCard key={book.id} book={book} role={role} />;
      })}
    </div>
  );
};

export default Books;
