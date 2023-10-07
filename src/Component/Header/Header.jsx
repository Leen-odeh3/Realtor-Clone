import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../firebase/Config";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="container">
      <img src="assets/logo.png" alt="logo-realtor" width="200px" />
      <div className="navs">
        <NavLink exact to="/home">
          Home
        </NavLink>
        <NavLink to="/offers">Offers</NavLink>
        {user && <NavLink to="/profile">Profile</NavLink>}

        {!user && <NavLink to="/signin">Signin</NavLink>}
      </div>
    </div>
  );
};

export default Header;
