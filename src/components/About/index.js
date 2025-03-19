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

        <div className="about-content flex flex-col items-center lg:flex-row">
          <span className="mb-16 lg:mb-0">
            <img src={Logo} className="w-96 lg:w-auto" alt="Logo" />
          </span>
          <div className="lg:ml-24">
            <li className="text-1xl mb-8 ml-4">
              Community Counselling Brighton CIC (15754120) aims to offer
              counselling to people who would otherwise not be able to have
              access to talking therapies.
            </li>
            <li className="text-1xl mb-8 ml-4">
              At this time we offer free counselling to Whitehawk Foodbank
              clients, that self-refer, or referred by our partner
              organisations.
            </li>

            <li className="text-1xl mb-8 ml-4">
              The project is partnering with{" "}
              <a
                href="http://www.stcuthmanswhitehawk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                St Cuthman’s Church
              </a>{" "}
              . The counselling sits within the existing services that include
              befriending, debt advice and food supplies.{" "}
            </li>

            <li className="text-1xl mb-8 ml-4">
              Qualified counsellors provide sessions which run to coincide with
              the community cafe times.
            </li>
            <li className="text-1xl mb-8 ml-4">
              Please use the{" "}
              <a
                href="#contact"
                className="text-blue-500 font-semibold cursor-pointer"
              >
                Contact page
              </a>{" "}
              if you would like to discuss accessing counselling, get involved
              or donate.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
