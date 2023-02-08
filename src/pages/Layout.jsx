import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout({ header, footer }) {
  return (
    <div className="grid grid-cols-1 grid-rows-6  min-h-screen">
      <div className="row-span-1 col-span-1  ">{header}</div>

      <Outlet />

      <div className="row-start-[-1]  row-end-[-2] col-span-1">{footer}</div>
    </div>
  );
}
