import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="wrapper-left">
          <h1 className="logo">
            &lt; <span>/</span>&gt;
          </h1>
          <ul className="menu">
            <li className="menuItem">Home</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Projects</li>
            <li className="menuItem">Contact</li>
          </ul>
        </div>
        <div className="wrapper-right">
          <button type="button" className="button">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
