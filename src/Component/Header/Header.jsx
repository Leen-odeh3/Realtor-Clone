import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  return (
    <div className="container">
      <img src="assets/logo.png" alt="logo-realtor" width="200px" />
      <div className="navs">

        <NavLink exact to="/home">Home</NavLink>
        <NavLink to="/offers">Offers</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/signin">Signin</NavLink>

      </div>
    </div>
  );
};

export default Header;
