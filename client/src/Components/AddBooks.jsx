// import React from "react";

// const AddBooks = () => {
//   return <div>AddBooks</div>;
// };

// export default AddBooks;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [name, setname] = useState("");
  const [aouthor, setAouthor] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bookstore-1-tnqb.onrender.com/book/addbook", {
        name,
        aouthor,
        image,
      })
      .then((res) => {
        if (res.data.added) {
          navigate("/books");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log("error from handlesubmit on login", err));
  };
  return (
    <>
      <div className="student-form-container">
        <form
          action="/addstudent"
          method="post"
          className="student-form"
          onSubmit={handleSubmit}
        >
          <h2>Add Books</h2>
          <div className="form-group">
            <label htmlFor="Book">Book Name:</label>
            <input
              type="text"
              id="Book"
              name="Book"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aouthor">aouthor :</label>
            <input
              type="text"
              id="aouthor"
              name="aouthor"
              onChange={(e) => setAouthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button type="submit ">Add Books</button>
        </form>
      </div>
    </>
  );
};

export default AddBooks;
