import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logowhite } from "../assets/assets";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial window size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="top-0 mx-auto sticky font-merriweather-regular text-2xl text-text z-50">
      <div className="flex flex-row gap-7 justify-between items-center">
        <img src={logowhite} className="" width={250} height={250} alt="" />
        {isMobile ? (
          <button onClick={toggleMenu} className="text-text">
            <FaBars className=" ml-[-6rem] h-6 w-6" />
          </button>
        ) : (
          <div className="flex items-center gap-7">
            <NavLink className="hover:text-hover" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-hover" to="/shop">
              Shop
            </NavLink>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 "
            />
            <button className="bg-secondary text-tertiary rounded-r-md px-2 py-1">
              <FaSearch className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
      {showMenu && isMobile && (
        <div className=" text-text p-4">
          <div className="flex flex-col gap-4">
            <NavLink
              className="hover:text-hover text-center"
              to="/"
              onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink
              className="hover:text-hover text-center"
              to="/shop"
              onClick={toggleMenu}>
              Shop
            </NavLink>
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <button className="  bg-secondary text-tertiary rounded-r-md px-1 py-1">
                <FaSearch className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
