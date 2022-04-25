// React
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="text-sm md:text-base 
    bg-blue-500 text-white font-semibold sticky top-0 
    flex align-center justify-between p-4"
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

      <ul className="py-1">
        <a className="ml-3 hover:text-gray-200 hover:underline" href="#about">
          About
        </a>
        <a className="ml-3 hover:text-gray-200 hover:underline" href="#Team">
          Team
        </a>
        <a
          className="ml-3 hover:text-gray-200 hover:underline"
          href="#sessions"
        >
          Sessions
        </a>
        <a className="ml-3 hover:text-gray-200 hover:underline" href="#vision">
          Vision
        </a>
        <a className="ml-3 hover:text-gray-200 hover:underline" href="#contact">
          Contact
        </a>
      </ul>
    </nav>
  );
}
