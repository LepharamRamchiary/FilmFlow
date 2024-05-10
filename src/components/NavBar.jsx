import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaTv } from "react-icons/fa6";

const NavBar = () => {
  const options = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Thriller",
    "Romance",
    "Documentary",
  ];

  // State variables for each dropdown
  const [bollywoodHovered, setBollywoodHovered] = useState(false);
  const [hollywoodHovered, setHollywoodHovered] = useState(false);
  const [tvShowsHovered, setTvShowsHovered] = useState(false);

  return (
    <div className="bg-slate-700 h-12 w-full md:h-[45px] md:w-full flex items-center justify-center">
      <ul className="flex gap-4 md:gap-8 lg:gap-12 text-white text-sm md:text-base lg:text-lg items-center">
        <li>HOME</li>
        <li
          onMouseEnter={() => {
            setBollywoodHovered(true);
            setHollywoodHovered(false);
            setTvShowsHovered(false);
          }}
          onMouseLeave={() => setBollywoodHovered(false)}
        >
          <button className="flex items-center gap-1">
            Bollywood <IoIosArrowDown />
          </button>
          {bollywoodHovered && (
            <ul className="absolute text-black bg-white/[0.2] py-1 px-3 font-extralight">
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => {
            setBollywoodHovered(false);
            setHollywoodHovered(true);
            setTvShowsHovered(false);
          }}
          onMouseLeave={() => setHollywoodHovered(false)}
        >
          <button className="flex items-center gap-1">
            Hollywood <IoIosArrowDown />
          </button>
          {hollywoodHovered && (
            <ul className="absolute text-black bg-white/[0.2] py-1 px-3 font-extralight">
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => {
            setBollywoodHovered(false);
            setHollywoodHovered(false);
            setTvShowsHovered(true);
          }}
          onMouseLeave={() => setTvShowsHovered(false)}
        >
          <button className="flex items-center gap-1">
            <li className="h-8 w-8 flex items-center justify-center bg-white/[0.1] rounded-full text-yellow-300">
              <FaTv className="" />
            </li>
            Tv Shows <IoIosArrowDown />
          </button>
          {tvShowsHovered && (
            <ul className="absolute text-black bg-white/[0.2] py-1 px-3 font-extralight">
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
