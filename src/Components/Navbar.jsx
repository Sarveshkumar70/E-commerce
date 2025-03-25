import React from "react";
import { useState } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCart } from "./CartContextComponent";
import Search from "./Search";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // using context data for showing whislist and cart item count
  const { cart, whislist } = useCart();

  return (
    <nav className="bg-[#131921] p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[12px] sm:text-2xl font-bold text-white">
          <Link to="/">My E-commerce</Link>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex items-center bg-white rounded-full overflow-hidden shadow-sm">
        <Search/>
        </div>

        {/* Icons & Dropdown */}
        <div className="flex items-center space-x-5">
          {/* Wishlist */}
          <Link to="/Whistlist">
            <div className="relative">
              <HeartIcon className="w-10 h-7 text-gray-300 hover:text-red-500 cursor-pointer transition" />
              <div className=" bg-red-500 text-white rounded-full  absolute -top-2 -right-0  w-5 h-5 flex justify-center items-center  ">
                <span>{whislist.length}</span>
              </div>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/Cart">
            <div className="relative">
              <ShoppingCartIcon className="w-10 h-7 text-gray-300 hover:text-blue-400 cursor-pointer transition" />
              {/* product numbers in cart */}
              <div className="bg-red-500 text-white rounded-full  absolute -top-2 -right-0 w-5 h-5 flex justify-center items-center  ">
                <span>{cart.length}</span>
              </div>
            </div>
          </Link>

          {/* User Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <UserIcon className="w-10 h-7 text-gray-300 hover:text-blue-400 cursor-pointer transition" />
            </button>

            {dropdownOpen && (
              <div className="absolute z-1 right-0 mt-3 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                <Link
                  to={"/LogIn"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign in your account
                </Link>

                
                <Link
                  to={"/SignUp"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  New user? Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 bg-[#131921] p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-600 rounded-full bg-gray-900 text-white focus:outline-none"
          />
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
          >
            Sign in your account
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
          >
            Your Orders
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
          >
            New user? Register
          </a>
        </div>
      )}
    </nav>
  );
}
