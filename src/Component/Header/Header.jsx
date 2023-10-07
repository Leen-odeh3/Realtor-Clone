import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  const links = ["Home", "Offers", "Profile","Signin"];

  return (
    <div className={style.container}>
      <img src="assets/logo.png" alt="logo-realtor" width="200px"/>
      <div className={style.navs}>
        {links.map((e, index) => (
          <NavLink to={`/${e}`} key={index}>
            {e}
          </NavLink>
        ))}
      </div>
    
    </div>
  );
};

export default Header;
