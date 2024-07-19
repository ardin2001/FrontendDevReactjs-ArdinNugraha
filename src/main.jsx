import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./pages/Restaurant.jsx";
import Login from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./404.jsx";
import DetailRestaurant from "./pages/DetailRestaurant.jsx";
import AuthContextProvider from "./context/ContextAuth.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/restaurant/:id",
    element: <DetailRestaurant />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
