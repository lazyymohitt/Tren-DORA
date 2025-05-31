import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex  items-center justify-between py-5 font-medium">
      <h1 className="w-34 text-xl sm:text-2xl font-[Tagesschrift]">Trendora..</h1>

      <ul className="hidden sm:flex gap-5  text-sm text-gray-800">
        <NavLink to="/" className=" flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className=" w-2/4 h-[1.5px] border-none  bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className=" flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className=" w-2/4 h-[1.5px] border-none  bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className=" flex flex-col items-center gap-1">
          <p>About</p>
          <hr className=" w-2/4 h-[1.5px] border-none  bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className=" flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className=" w-2/4 h-[1.5px] border-none  bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <i className="ri-search-2-line text-lg   w-5 cursor-pointer"></i>

        <div className="group relative">
          <i className="ri-user-3-line text-lg  w-5 cursor-pointer"></i>
          <div className="group-hover:block hidden absolute dropdown-menu  right-0 pt-4">
            <div className="flex flex-col  gap-2  w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded-md">
              <p className="cursor-pointer text-sm hover:text-black">
                My Profile
              </p>
              <p className="cursor-pointer text-sm hover:text-black">Orders</p>
              <p className="cursor-pointer text-sm hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <i className="ri-shopping-cart-line text-lg  w-5 min-w-5"></i>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4  bg-red-400 text-white  aspect-square rounded-full text-[8px]">
            44
          </p>
        </Link>
        <i
          onClick={() => setVisible(true)}
          className="ri-menu-3-line w-5 cursor-pointer sm:hidden "
        ></i>
      </div>
      {/* // making side menu for Small Screennn */}
      <div
        className={`absolute bg-white overflow-hidden top-0 right-0 bottom-0 transition-all ease-out duration-400 ${
          visible ?'w-full' : 'w-0'
        }`}
      >
        <div className=" flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="back- flex items-center gap-3 p-3 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line"></i>
            <p>BACK</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border-b m-2"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6  border-b m-2"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border-b m-2"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border-b m-2"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
