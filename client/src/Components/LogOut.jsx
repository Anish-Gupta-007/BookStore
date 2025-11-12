import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = ({ setRolee }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/logout")
      .then((res) => {
        if (res.data.logout) {
          setRolee("");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default LogOut;
