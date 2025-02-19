// React
import React from "react";
// 3rd party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox,
  faUsers,
  faUserGroup,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

export default function Vision() {
  return (
    <section
      id="vision"
      className="flex align-center justify-center py-20 px-6 text-white purple"
    >
      <div className="max-w-6xl">
        <h2 className="text-5xl font-bold mb-20">Vision</h2>
        <p className="text-2xl mb-8 text-left">
          Our goal is to develop a network of counselling services across
          Brighton & Hove. We will be working with food-banks to offer free and
          low-cost therapies. Starting in Whitehawk, our goal is to partner with
          local services to deliver group work programs, workshops and 1:1
          counselling for all ages.
        </p>
        <p className="text-2xl mb-8 text-left">
          If you have any questions or would like to be involved in donating,
          sponsoring, working or volunteering with the team then please contact
          us as below.
        </p>
        <div className="font-600 mt-20 text-center grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-around">
          <div className="flex-col w-100%">
            <FontAwesomeIcon
              icon={faToolbox}
              size="2x"
              className="mb-2 fa-light"
            />
            <p>Workshops</p>
          </div>
          <div className="flex-col w-100%">
            <FontAwesomeIcon
              icon={faUsers}
              size="2x"
              className="mb-2 fa-light"
            />
            <p>Small group therapy</p>
          </div>
          <div className="flex-col w-100%">
            <FontAwesomeIcon
              icon={faUserGroup}
              size="2x"
              className="mb-2 fa-light"
            />
            <p>121 Counselling</p>
          </div>
          <div className="flex-col w-100%">
            <FontAwesomeIcon
              icon={faNetworkWired}
              size="2x"
              className="mb-2 fa-light"
            />
            <p>Collaboration with local services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
