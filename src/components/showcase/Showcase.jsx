import Navbar from '../navbar/Navbar';
import Intro from '../intro/Intro';

import './showcase.css';

const Showcase = () => {
  return (
    <div className="showcase" id="showcase">
      <Navbar />
      <Intro />
      <div className="showcase-shape"></div>
    </div>
  );
};

export default Showcase;
