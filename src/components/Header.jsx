import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-800 w-full md:h-24 lg:h-20 py-4 px-10 md:py-3 md:px-8 lg:py-4 lg:px-10">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
            FlimFlow
          </h1>
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
