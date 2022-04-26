// React
import React from "react";
// Assets
import PathImg from "../../images/path.jpg";

export default function Sessions() {
  return (
    <div id="sessions" className="flex align-center justify-center py-20 px-6">
      <div className="max-w-6xl text-left">
        <h2 className="text-5xl text-gray-700 font-bold mb-20">Sessions</h2>

        <div className="about-content flex flex-col lg:flex-row align-center">
          <span className="mt-2 mb-12 lg:mt-0">
            <img src={PathImg} className="w-96 lg:w-auto" alt="Pathway" />
          </span>
          <div className="lg:ml-12">
            <li className="text-1xl mb-8 ml-4">
              We provide up to 20, weekly, 50-minute counselling sessions to
              Whitehawk foodbank clients who are 18+ years old.
            </li>
            <li className="text-1xl mb-8 ml-4">
              The counselling sessions take place while the Whitehawk Community
              Café is running. The cafe offers foodbank clients and local
              people, a cuppa, company, fruit and vegetables and bakery goods.
            </li>
            <li className="text-1xl mb-8 ml-4">
              The approach is collaborative between therapist and client,
              offering space to reflect on issues or changes they may like to
              make in their lives. It is person centred and based on an
              empowerment model.
            </li>
            <li className="text-1xl mb-8 ml-4">
              Clients can speak briefly on the phone or by email to arrange a
              50-minute introductory session. This will help us to see if
              counselling is the best thing for you at this time.
            </li>
            <div className="rounded p-3 bg-blue-100">
              Please speak to us about any accessibility needs you may have such
              as language, mobility difficulties, understanding and
              communication.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
