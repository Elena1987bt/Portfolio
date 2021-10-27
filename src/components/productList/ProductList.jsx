import './productList.css';
import Product from '../product/Product';
import { products } from '../../data.js';

const ProductList = () => {
  return (
    <div className="productList" id="productList">
      <div className="productList-wrapper">
        <div className="productList-texts">
          <h1 className="productList-title">Create & inspire. It's Me :)</h1>
          <p className="productList-desc">
            My portfolio is creative consisting different projects, from simple
            websites to beautiful online shops
          </p>
        </div>
        <div className="productList-list">
          {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
              technologies={item.technologies}
              user={item.user}
            />
          ))}
        </div>
      </div>
      <div className="productList-shape"></div>
    </div>
  );
};

export default ProductList;
