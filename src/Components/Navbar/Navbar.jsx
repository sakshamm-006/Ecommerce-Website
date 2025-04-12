import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/clothes" },
  { id: 3, name: "Kids Wear", link: "/kidswear" },
  { id: 4, name: "Mens Wear", link: "/menswear" },
  { id: 5, name: "Contact Us", link: "/contact" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-lg bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 ">
        <div className="container flex justify-between items-center px-2 py-2">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1 text-white">
              <FiShoppingBag size="30" />
              ClothVerse
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-2 focus:border-blue-500 dark:border-gray-500 dark:bg-slate-800 "
              />
              <IoMdSearch className="text-gray-800 group-hover:text-white absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3 shadow-md hover:shadow-lg"
            >
              <span>Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center px-6">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 py-2 text-gray-800 hover:text-blue-500 transition duration-200 rounded-md"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-1 py-2 text-gray-800 hover:text-blue-500 transition duration-200">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-blue-500 hover:text-white transition duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;