// React
import React from "react";
// Assets
import Logo from "../../images/logo.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex align-center justify-center pt-20 pb-12 px-6"
    >
      <div className="max-w-6xl text-left">
        <h2 className="text-5xl text-gray-700 font-bold mb-20">About</h2>

        <div className="about-content flex flex-col items-center  lg:flex-row lg:items-start">
          <span className="mb-16 lg:mb-0">
            <img src={Logo} className="w-96 lg:w-auto" alt="Logo" />
          </span>
          <div className="lg:ml-24">
            <li className="text-1xl mb-8 ml-4">
              Community Counselling Brighton aims to offer counselling to people
              who would otherwise not be able to have access to talking
              therapies.
            </li>
            <li className="text-1xl mb-8 ml-4">
              Currently the project is working in partnership with{" "}
              <a
                href="http://www.stcuthmanswhitehawk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                St Cuthman’s Church
              </a>{" "}
              in Whitehawk on Thursdays and{" "}
              <a
                href="http://www.stcuthmanswhitehawk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                St Richard's Church
              </a>{" "}
              in Hollingdean on Monday mornings. Currently, the project is
              partnering with in Whitehawk, and sits within the existing
              services which include befriending, debt advice and food supplies.
            </li>
            <li className="text-1xl mb-8 ml-4">
              Qualified counsellors
              <a
                href="https://gillsnowcounselling.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                {" "}
                Gill Dakin
              </a>{" "}
              and{" "}
              <a
                href="https://Patriciahide.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                Pat Hide{" "}
              </a>{" "}
              currently provide sessions which run to coincide with other
              community services provided at these venues such as foodbanks,
              debt advice and the community cafés.
            </li>
            <li className="text-1xl mb-8 ml-4">
              Please use the{" "}
              <a
                href="#contact"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                Contact page
              </a>{" "}
              if you would like to discuss accessing counselling support or if
              you would like to get involved.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
