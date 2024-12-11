import "./cart.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [allcart, setAllcart] = useState([]);
  const [total, setTotal] = useState(0);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get("http://localhost:3000/api/allcart");
      const data = res.data;
      setAllcart(data);
      const count = data.reduce((current, item) => {
        return current + item.price;
      }, 0);
      setTotal(count);
    };
    getApi();
  }, [allcart]);

  const deleteCart = (code) => {
    axios
      .delete(`http://localhost:3000/api/allcart/1/delete/${code}`)
      .then((res) => console.log(res));
    setDeleted(true);
  };

  return (
    <>
      <section className="cart-page" id="cart">
        <h1>Your Cart</h1>
        {deleted ? <div className="delete">Cart is deleted</div> : ""}
        <div className="cart-items">
          {allcart.map((item) => {
            return (
              <>
                <div className="cart-item">
                  <img src={item.image} alt="Product 1" />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p className="cart-price">{item.price}</p>
                    <button
                      onClick={() => deleteCart(item.code)}
                      className="remove-item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="cart-summary">
          <p>Total: {total}</p>
          <button className="checkout">Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
