import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .delete("https://bookstore-1-tnqb.onrender.com/book/delete/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/books");
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteBook;
