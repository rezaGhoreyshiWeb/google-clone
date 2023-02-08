import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages";
import { Footer, Header, Home, Search } from "./components";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={<Header />} footer={<Footer />} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path:'/search',
    element: <Search/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
