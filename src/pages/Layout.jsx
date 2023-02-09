import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout({ header, footer }) {
  return (
    <div className="grid grid-cols-1  min-h-screen">
      <div className=" row-start-1 row-end-2 col-span-1  ">{header}</div>

      <Outlet />

      <div className=" row-start]">{footer}</div>
    </div>
  );
}
