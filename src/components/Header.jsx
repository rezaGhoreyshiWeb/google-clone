import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import User from "./User";
export default function HomeHeader() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 ">
      <div className="flex space-x-4 items-center">
        <a href="https://about.google/" className="link">
          About
        </a>
        <a href="https://store.google.com/" className="link">
          Store
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="https://mail.google.com" className="link">
          Gmail
        </a>
        <a
          onClick={() =>
            navigate(
              `/search?term=${
                searchParams.get("term") || "google"
              }&searchType=image`
            )
          }
          className="link"
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
