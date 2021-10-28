import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './sidebar.css';

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        <CloseIcon className="close-btn" />
      </div>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#showcase">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#productList">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
