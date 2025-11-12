import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Books from "./Components/Books";
import Login from "./pages/Login";
import Deshbord from "./Components/Deshbord";
import AddStudent from "./Components/AddStudent";
import { useEffect, useState } from "react";
import LogOut from "./Components/LogOut";
import axios from "axios";
import AddBooks from "./Components/AddBooks";
import EditBook from "./Components/EditBook";
import DeleteBook from "./Components/DeleteBook";

function App() {
  const [role, setRolee] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRolee(res.data.role);
        } else {
          setRolee("");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar role={role} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books role={role} />}></Route>
          <Route path="/login" element={<Login setRolee={setRolee} />}></Route>
          <Route
            path="/logout"
            element={<LogOut setRolee={setRolee} />}
          ></Route>
          <Route path="/deshboard" element={<Deshbord />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          <Route path="/addbook" element={<AddBooks />}></Route>
          <Route path="/updates/:id" element={<EditBook />}></Route>
          <Route path="/delete/:id" element={<DeleteBook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
