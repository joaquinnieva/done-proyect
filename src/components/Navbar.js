import React from 'react';
import '../styles/Navbar.css';
import Images from './Images';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={Images.logo} className="logo" alt="logo" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
