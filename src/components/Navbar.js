import React, { useState } from "react";
import "./styles/Navbar.css";
import Images from "./Images";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? "navbar" : "navbar-open"}>
      <div className="navbar-container">
        <i className={click ? "icon-back" : "icon-back-open"} onClick={handleClick}>
          <div className="back-lineA"></div>
          <div className="back-lineB"></div>
          <div className="back-lineC"></div>
        </i>
        <div className="logo-container">
          <img src={Images.logo} className="logo" alt="logo" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;