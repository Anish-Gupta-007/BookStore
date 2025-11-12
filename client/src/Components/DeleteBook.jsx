import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .delete("http://localhost:4000/book/delete/" + id)
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
