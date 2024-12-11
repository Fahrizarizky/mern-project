import { Link } from "react-router-dom";
import "./product.css";
/* eslint-disable react/prop-types */
const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product-card">
        <img src={product.image} alt="Product 1" />
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <Link to={`/product/${product._id}`} className="detail">
          Detail Product
        </Link>
      </div>
    </>
  );
};

export default Product;
