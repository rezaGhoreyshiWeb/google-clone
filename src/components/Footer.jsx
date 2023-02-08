import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-end h-full p-3 text-sm text-gray-600 ">
      <p>Copyright &copy; {new Date().getFullYear()} Reza Goreyshi</p>
    </footer>
  );
}
