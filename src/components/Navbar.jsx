import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00ffa6]">REACT.</h1>
      <ul className="hidden text-xl md:flex">
        <li className="p-4 ">
          <a href="/" className="hover:opacity-75">
            Home
          </a>
        </li>
        <li className="p-4">
          <a href="company" className="hover:opacity-75">
            Company
          </a>
        </li>
        <li className="p-4">
          <a href="resources" className="hover:opacity-75">
            Resources
          </a>
        </li>
        <li className="p-4">
          <a href="about" className="hover:opacity-75">
            About
          </a>
        </li>
        <li className="p-4">
          <a href="contact" className="hover:opacity-75">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-black duration-500 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00ffa6]">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="border-b border-gray-600 p-4">
            <a href="/">Home</a>
          </li>
          <li className="border-b border-gray-600 p-4">
            <a href="company">Company</a>
          </li>
          <li className="border-b border-gray-600 p-4">
            <a href="resources">Resources</a>
          </li>
          <li className="border-b border-gray-600 p-4">
            <a href="about">About</a>
          </li>
          <li className="p-4">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
