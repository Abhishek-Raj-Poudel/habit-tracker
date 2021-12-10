import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user">
        <div className="user__profileimg"></div>
        <div className="user__profile">
          <div className="user__profilename">Abhishek</div>
          <div className="user__profilestatus">member</div>
        </div>
        <div className="user__profiledropdown">
          <FontAwesomeIcon class="user__dropdown" icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
