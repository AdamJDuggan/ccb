// React
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="text-sm md:text-base 
    bg-blue-500 text-white font-semibold sticky top-0 
    flex items-center justify-between p-4"
    >
      <a
        href="#landing"
        className="cursor-pointer hover:text-gray-200 hidden md:inline"
      >
        Community Counselling Brighton
      </a>
      <a
        href="#landing"
        className="cursor-pointer hover:text-gray-200 text-xs inline md:hidden border-2 p-1 rounded"
      >
        CCB
      </a>
      <a className="ml-3 hover:text-gray-200 hover:underline" href="#contact">
        Contact
      </a>
    </nav>
  );
}
