import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useSelector(state => state.items.cartItemsCount)
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center m-6 text-[#143A51]">
      {!isMenuOpen && (
        <div className="cursor-pointer" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 transform transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
      >
        <div>
          <div
            onClick={handleMenu}
            className="text-white text-xl text-end md:m-7 m-6 hover:text-[#FF5D68] cursor-pointer"
          >
            <i className="fa-solid fa-x md:mr-10"></i>
          </div>
          <ul className="text-white flex flex-col font-normal text-center space-y-6 text-2xl">
            <li className="hover:text-[#FF5D68] w-full duration-300 cursor-pointer">
              <NavLink to={"/"} onClick={handleMenu}>
                {" "}
                Home{" "}
              </NavLink>
            </li>

            <li className="hover:text-[#FF5D68] w-full duration-300 cursor-pointer">
              <NavLink to={"/mobile-phones"} onClick={handleMenu}> Mobile Phones </NavLink>
            </li>
            <li className="hover:text-[#FF5D68] w-full duration-300 cursor-pointer">
              <NavLink to={"/labtops"} onClick={handleMenu}>
                {" "}
                Computers{" "}
              </NavLink>
            </li>
            <li className="hover:text-[#FF5D68] w-full duration-300 cursor-pointer">
              <NavLink onClick={handleMenu} to={"/contact"}>
                {" "}
                Contact{" "}
              </NavLink>
            </li>
            {/* <li className="hover:text-[#FF5D68] w-full duration-300 cursor-pointer md:hidden">
             <NavLink to={"/cart"} onClick={handleMenu}> Cart </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="text-4xl font-bold">FRICA</div>
      <div className="relative cursor-pointer">
        <NavLink to={"/cart"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        <p className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center ">
          {items}
        </p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
