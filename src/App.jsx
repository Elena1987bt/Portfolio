import Showcase from './components/showcase/Showcase';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useThemeContext } from './context.js';
const App = () => {
  const { state } = useThemeContext();
  const darkMode = state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        zIndex: 20,
        position: 'absolute',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Showcase />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
