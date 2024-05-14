import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaTv } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

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

  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-slate-700 h-12 w-full md:h-[45px] sm:h-[25px] lg:[45px] md:w-full flex items-center justify-between md:items-center md:justify-between sm:items-center sm:justify-between lg:items-center lg:justify-between">
      <div className="flex items-center">
        {showMenu ? (
          <IoMdClose
            className="cursor-pointer block md:hidden text-white text-lg ml-5"
            onClick={toggleMenu}
          />
        ) : (
          <CiMenuBurger
            className="cursor-pointer block md:hidden text-white text-lg ml-5"
            onClick={toggleMenu}
          />
        )}

        <ul
          className={`${showMenu || !isSmallScreen ? "flex" : "hidden"} ${
            isSmallScreen
              ? "absolute flex-col top-28 w-full bg-slate-400 z-50 text-white font-bold items-center justify-center p-5 h-auto gap-5 text-base"
              : "m-11 md:m-10 sm:mr-8 gap-4 md:gap-8 lg:gap-10 text-base md:text-base lg:text-lg"
          } text-white items-center`}
        >
          <Link to="/">
            <li>HOME</li>
          </Link>

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
              <ul className="absolute z-50 text-white bg-slate-900/[0.7] py-1 px-3 md:py-1 md:px-3 sm:py-1 sm:px-3 lg:py-1 lg:px-3 font-extralight">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-sky-600 border-solid border-b-2 border-slate-400 justify-center items-center p-2"
                  >
                    {option}
                  </li>
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
              <ul className="absolute z-50 text-white bg-slate-900/[0.7] py-1 px-3 md:py-1 md:px-3 sm:py-1 sm:px-3 lg:py-1 lg:px-3 font-extralight">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-sky-600 border-solid border-b-2 border-slate-400 justify-center items-center p-2"
                  >
                    {option}
                  </li>
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
              <li className="h-8 w-8 md:h-8 md:w-8 sm:h-6 sm:w-6 lg:h-8 lg:w-8 flex items-center justify-center bg-white/[0.1] rounded-full text-yellow-300">
                <FaTv className="" />
              </li>
              TvShows <IoIosArrowDown />
            </button>
            {tvShowsHovered && (
              <ul className="absolute z-50 text-white bg-slate-900/[0.7] py-1 px-3 md:py-1 md:px-3 sm:py-1 sm:px-3 lg:py-1 lg:px-3 font-extralight">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-sky-600 border-solid border-b-2 border-slate-400 justify-center items-center p-2"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="relative ml-[-40px]  mr-10 md:mr-12 sm:mr-8 lg:mr-10">
        <div className="group flex items-center">
          <div className="flex h-8 md:h-8 md:ml-8 md:pl-5 border border-[#303030] rounded-l-full rounded-r-full group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-yellow-300 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pr-10 md:pl-0  md:group-focus-within:pl-0 w-60 sm:w-full md:w-40 lg:w-[400px]"
            />
          </div>
          <button className="absolute right-0 w-10 md:w-10 h-10 w md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-full bg-yellow-300">
            <IoIosSearch className="text-white text-2xl font-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
