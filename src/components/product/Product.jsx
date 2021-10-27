import './product.css';

const Product = ({ img, link, title, technologies, user }) => {
  console.log(title);
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="product-link">
        <div className="img">
          <img src={img} alt="" className="product-img" />
          <div class="product-text">
            <h4>{title}</h4>
            <p>{technologies}</p>
            <p>{user && `Log in with: ${user}`}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
