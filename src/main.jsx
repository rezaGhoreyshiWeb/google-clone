import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages";
import { Footer, Header, Home, Pagination, SearchHeader } from "./components";
import SearchResult from "./components/SearchResult";


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
    element: <Layout header={<SearchHeader/>}  footer={<Pagination/>}/>,
    children: [
      {
        path: '/search',
        element: <SearchResult/>
      }
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
