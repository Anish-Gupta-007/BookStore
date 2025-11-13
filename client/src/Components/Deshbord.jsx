import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import axios from "axios";
const Deshbord = () => {
  const [student, setStudent] = useState(0);
  const [book, setBook] = useState(0);
  const [admin, setAdmin] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:4000/deshboard")
      .then((res) => {
        if (res.data.ok) {
          setAdmin(res.data.admin);
          setBook(res.data.book);
          setStudent(res.data.student);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Book</h2>
        <br />
        <h2>{book}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Student</h2>
        <br />
        <h2>{student}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admin</h2>
        <br />
        <h2>{admin}</h2>
      </div>
    </div>
  );
};

export default Deshbord;
