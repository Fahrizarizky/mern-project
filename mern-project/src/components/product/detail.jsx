/* eslint-disable react/prop-types */
// import Product from "../../seed.json";
import axios from "axios";
import "./detail.css";
import { useState } from "react";
const Detail = (props) => {
  const { detailProduct } = props;
  const [success, setSuccess] = useState(false);
  // const productdetail = Product.find((product) => product.id == _id);
  const addToCart = (code) => {
    axios
      .post("http://localhost:3000/api/allcart/1/add", {
        code: code,
      })
      .then((res) => console.log(res));
    setSuccess(true);
  };
  return (
    <>
      <section className="product-detail-page" id="product-detail">
        {success ? <div className="success">success add to cart</div> : ""}
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={detailProduct.image} alt="Product Detail" />
          </div>
          <div className="product-detail-info">
            <h1>{detailProduct.name}</h1>
            <p className="price">{detailProduct.price}</p>
            <p className="description">{detailProduct.description}</p>
            <button
              onClick={() => addToCart(detailProduct.code)}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
