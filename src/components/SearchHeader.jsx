import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import User from "./User";

import GoogleLogo from "../assets/Google-logo.png";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(searchParams.get("term"));

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function goSearch(e) {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    setSearchParams({
      term: inputValue,
      searchType: "",
    });
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          onClick={() => navigate("/")}
          className="object-cover cursor-pointer hidden sm:inline-flex "
          src={GoogleLogo}
          width={120}
          height={40}
          alt="google logo"
          loading="lazy"
        />
        <form
          onSubmit={goSearch}
          className="flex border border-gray-200 rounded-md sm:rounded-full shadow-lg px-6 py-3 sm:ml-10 sm:mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            onChange={handleInput}
            type="text"
            value={inputValue}
            className="w-full focus:outline-none"
          />
          <XMarkIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => setInputValue("")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer" />
          <MagnifyingGlassIcon
            onClick={goSearch}
            className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer"
          />
          <button type="submit" className="hidden">
            {" "}
            submit
          </button>
        </form>
        <User className="ml-auto hidden md:inline-flex" />
      </div>
      <SearchHeaderOption />
    </header>
  );
}
