import React from "react";
import "./sidebutton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
function Sidebutton({ buttonName, icons }) {
  return (
    <div className="sidebutton">
      <div className="sidebutton__icon">
        <FontAwesomeIcon
          class="sidebutton__icon__symbol"
          icon={icons == "faCog" ? faCog : icons === "faPlus" ? faPlus : faStar}
        />
      </div>
      <p>{buttonName}</p>
    </div>
  );
}

export default Sidebutton;
