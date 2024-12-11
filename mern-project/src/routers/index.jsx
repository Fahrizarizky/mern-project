import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import DetailPage from "../views/product/detail";
import CartPage from "../views/cart";
import ProductPage from "../views/product";
import HomePage from "../views";
import ErrorPage from "../views/errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/:_id",
        element: <DetailPage />,
      },
      {
        path: "/product/:_id/addtocart",
        element: <CartPage />,
      },
    ],
  },
]);
