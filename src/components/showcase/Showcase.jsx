import Sidebar from '../sidebar/Sidebar';
import Intro from '../intro/Intro';
import './showcase.css';

const Showcase = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="showcase" id="showcase">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="showcase-shape"></div>
    </div>
  );
};

export default Showcase;
