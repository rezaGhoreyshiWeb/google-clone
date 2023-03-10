import React from "react";

export default function User({ className = "" }) {
  return (
    <button
      className={
        "cursor-not-allowed bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md whitespace-nowrap " +
        className
      }
    >
      Sign in
    </button>
  );
}
