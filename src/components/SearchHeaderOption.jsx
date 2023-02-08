import React from "react";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";

export default function SearchHeaderOption() {
  const [searchParams, setSearchParams] = useSearchParams();
  const select = !searchParams.get("searchType") ? "All" : "Images";

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 md:pl-52 md:justify-start border-b ">
      <Option
        onClick={() =>
          setSearchParams({
            term: searchParams.get("term"),
            searchType: "",
          })
        }
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={select === "All"}
      />
      <Option
        onClick={() =>
          setSearchParams({
            term: searchParams.get("term"),
            searchType: "image",
          })
        }
        title="Images"
        Icon={PhotoIcon}
        selected={select === "Images"}
      />
    </div>
  );
}

function Option({ title, Icon, selected, ...rest }) {
  return (
    <div
      {...rest}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500  pb-3 ${
        selected && "text-blue-500 border-blue-500 "
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
