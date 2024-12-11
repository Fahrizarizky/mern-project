import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
const Layout = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">Fahrizky Store</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
