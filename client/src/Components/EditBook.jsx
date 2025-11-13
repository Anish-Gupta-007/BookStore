import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [name, setname] = useState("");
  const [aouthor, setAouthor] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://bookstore-1-tnqb.onrender.com/book/updates/" + id)
      .then((res) => {
        setname(res.data.name);
        setAouthor(res.data.aouthor);
        setImage(res.data.image);
        console.log(res);
      })
      .catch((err) => console.log("error from update book", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/book/updates/" + id, {
        name,
        aouthor,
        image,
      })
      .then((res) => {
        if (res.data.updated) {
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
          <h2>edit Books</h2>
          <div className="form-group">
            <label htmlFor="Book">Book Name:</label>
            <input
              type="text"
              id="Book"
              name="Book"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aouthor">aouthor :</label>
            <input
              type="text"
              id="aouthor"
              name="aouthor"
              onChange={(e) => setAouthor(e.target.value)}
              value={aouthor}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>

          <button type="submit ">update Books</button>
        </form>
      </div>
    </>
  );
};

export default EditBook;
