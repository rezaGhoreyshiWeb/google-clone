import React from "react";
import { Outlet } from "react-router-dom";


export default function Layout({ header, footer }) {
  return (
    <div className="grid grid-cols-1 auto-rows-auto min-h-screen">
      <div className="row-span-1 col-span-1 ">{header}</div>
     
        <Outlet />
     
      <div className="row-span-1 col-span-1">
        {footer}
      </div>
    </div>
  );
}
