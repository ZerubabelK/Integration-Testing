import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/admin/dashboard";
import Orders from "./pages/admin/orders";
import Item from "./pages/admin/item";
import Setting from "./pages/admin/setting";
import Login from "./pages/auth/login";
import CreateOrder from "./pages/admin/orders/create";
import Error from "./pages/error";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        children: [
          {
            path: "",
            element: <Orders />,
          },
          {
            path: "create",
            element: <CreateOrder />,
          },
        ],
      },
      {
        path: "item",
        element: <Item />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
