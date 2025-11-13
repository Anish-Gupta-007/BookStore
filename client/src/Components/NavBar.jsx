import React from "react";
import "../css/navBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ role }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand navbar-link">
          Book Store
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/books" className="navbar-link">
          All Books
        </Link>
        {role === "admin" && (
          <>
            <Link to="/addbook" className="navbar-link">
              Add books
            </Link>
            <Link to="/addstudent" className="navbar-link">
              Add Student
            </Link>
            <Link to="/deshboard" className="navbar-link">
              Deshboard
            </Link>
          </>
        )}
        {role === "" ? (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        ) : (
          <Link to="/logout" className="navbar-link">
            LogOut
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
