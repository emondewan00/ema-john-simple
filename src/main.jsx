import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products.jsx";
import Layout from "./Layout/Layout";
import OrderReview from "./components/OrderReview";
import Login from "./components/Login";
import AuthProvider from "./components/Provider/AuthProvider";
import ProviteRoute from "./proviteRoute/ProviteRoute";
import Registration from "./components/Registration";
import Inventory from "./components/Inventory";
import OrderData from "./orderdData/OrderData";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "orderReview",
        element: (
          <ProviteRoute>
            <OrderReview />
          </ProviteRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <ProviteRoute>
            <Inventory />
          </ProviteRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
