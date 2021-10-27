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
            <li className="menuItem">
              <a href="#showcase" className="link">
                Home
              </a>
            </li>
            <li className="menuItem">
              <a href="#about" className="link">
                About
              </a>
            </li>
            <li className="menuItem">
              <a href="#productList" className="link">
                Projects
              </a>
            </li>
            <li className="menuItem">
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
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
