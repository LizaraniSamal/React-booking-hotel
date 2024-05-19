import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const onClickLoginBtn = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/">
            <span className="logo">BookingHotels</span>
          </Link>

          <div className="navItems">
            <button className="navButton" onClick={onClickLoginBtn}>
              Register
            </button>

            <button className="navButton" onClick={onClickLoginBtn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
