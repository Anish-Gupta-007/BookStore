import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [userName, setUserName] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bookstoreclient-2.onrender.com/student/register", {
        userName,
        password,
        roll,
        grade,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/deshboard");
        }
        console.log(res);
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
          <h2>Add student</h2>
          <div className="form-group">
            <label htmlFor="roll">Roll No:</label>
            <input
              type="text"
              id="roll"
              name="roll"
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userName">UserName :</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade">Grade :</label>
            <input
              type="text"
              id="grade"
              name="grade"
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit ">Register</button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
