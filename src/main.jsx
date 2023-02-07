import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages";
import { Header, Home } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={<Header/>} />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
