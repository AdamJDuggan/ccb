// React
import React from "react";
// 3rd party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ show, onClose, message }) {
  if (show) {
    return (
      <div className="modal-overlay">
        <div className="modal p-4 rounded justify-center shadow">
          <div className="text-right">
            <FontAwesomeIcon
              onClick={onClose}
              icon={faMultiply}
              size="xl"
              className="mb-2 text-red-800 p-2 text-semibold cursor-pointer"
            />
          </div>

          <div className="flex align-center px-2 mt-2 mb-6 font-semibold">
            {message}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
