"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/Constants";
import Link from "next/link";
const Navbar = () => {
  const [mobDrawOpen, setmobDrawOpen] = useState(false);

  const toggleNavbar = () => {
    setmobDrawOpen(!mobDrawOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between  items-center ">
          <div className="flex  items-center  flex-shrink-0">
            <img
              className="h-20 w-40  mr-2"
              src="https://cognifyz.com/wp-content/uploads/2023/11/cognifyz-1.png"
            />
            <span className=" text-xl tracking-tight"> Congifyz Intern</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link href="#" className=" py-2 px-3 border rounded-xl">
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-orange-400 to orange-700 py-2 px-3 border rounded-xl"
            >
              Create an Account
            </Link>
          </div>
          <div className=" lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar}>
              {mobDrawOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobDrawOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {NAV_LINKS.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href="#" className=" py-2 px-3 border rounded-lg">
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-orange-400 to orange-700 py-2 px-3 border rounded-xl">
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
