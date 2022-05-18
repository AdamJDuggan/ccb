// React
import React from "react";
// Styles
import * as styles from "./index.module.css";

export default function Landing() {
  return (
    <header
      id="landing"
      className="bg-bottom bg-fixed bg-no-repeat md:bg-right bg-cover relative flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl text-left header-content">
        <h1 className="font-bold text-5xl md:text-6xl mb-6 text-white">
          Community Counselling Brighton
        </h1>
        <h2 className="text-gray-100 text-2xl md:text-4xl">
          Striving for equal access to counselling for all
        </h2>

        <div className="inline-flex mt-4"></div>
      </div>
    </header>
  );
}
