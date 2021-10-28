import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <div className="navbar">
      <div onClick={() => setMenuOpen(!menuOpen)} className="menuIcon">
        <MenuIcon style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Navbar;
