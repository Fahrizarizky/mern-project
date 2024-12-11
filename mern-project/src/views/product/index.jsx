import axios from "axios";
import { useEffect, useState } from "react";
import "./product.css";
import Product from "../../components/product/product";
// import datajson from "../../seed.json";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  // const productjson = datajson;
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/product")
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <>
      <section className="product-page" id="product">
        <h1>All Products</h1>
        <div className="product-cards">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
