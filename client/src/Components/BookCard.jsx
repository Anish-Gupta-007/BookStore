import React from "react";
import "../css/Book.css";
import { Link } from "react-router-dom";

const BookCard = ({ book, role }) => {
  const { name, aouthor, image } = book;
  return (
    <div className="book-card">
      <img src={image} alt="name" className="book-image" />
      <div className="book-detail">
        <h3>{name}</h3>
        <p>{aouthor}</p>
      </div>
      {role === "admin" && (
        <div className="book-action">
          <button>
            <Link to={`/updates/${book._id}`}>edit</Link>
          </button>
          <button>
            <Link to={`/delete/${book._id}`}>Delete</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
