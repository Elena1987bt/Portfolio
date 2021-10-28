import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';

import { useThemeContext } from '../../context';
import './toggle.css';

const Toggle = () => {
  const { state, dispatch } = useThemeContext();

  const handleClick = () => {
    dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
