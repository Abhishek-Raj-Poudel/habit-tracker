import React from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <div className="user">
      <div className="user__profileimg"></div>
      <div className="user__profileinfo">
        <div className="user__profilename">Abhishek Raj</div>
        <div className="user__profilestatus">member</div>
      </div>
      <div className="user__profiledropdown">
        <FontAwesomeIcon class="user__dropdown" icon={faCaretDown} />
      </div>
    </div>
  );
}

export default User;
