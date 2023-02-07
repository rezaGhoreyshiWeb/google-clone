import React from "react";
import GoogleLogo from "../assets/Google-logo.png";
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="row-span-4 col-span-1  ">
      <form className="flex  flex-col  items-center justify-center h-full   space-y-4 ">
        <img
          className="object-cover "
          src={GoogleLogo}
          width={300}
          height={100}
          alt="google logo"
          loading="lazy"
        />
        <div className=" flex   space-x-3 border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center w-full sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 cursor-pointer" />
          <input className="flex-grow focus:outline-none" type="text" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row md:items-center md:justify-center">

        <button type="button" className="btn">Google Search</button>
        <button type="button" className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}
