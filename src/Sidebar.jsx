import React from "react";
import "./sidebar.css";
import User from "./User";
import Sidebutton from "./Sidebutton";
function Sidebar() {
  return (
    <div className="sidebar">
      <User />
      <div className="sidebar__allHabit">
        <Sidebutton buttonName="All Habits" />
      </div>

      <div className="specificSection">
        <p className="specificSection__title">SPECIFIC SECTION</p>
        <Sidebutton buttonName="Basketball" />
        <Sidebutton buttonName="Add Section" icons="faPlus" />
      </div>

      <div className="specificSection">
        <p className="specificSection__title">ACHIVEMENT SECTION</p>
        <Sidebutton buttonName="Achivement" />
      </div>
      <div className="sidebar__setting">
        <Sidebutton buttonName="Setting" icons="faCog" />
      </div>
    </div>
  );
}

export default Sidebar;
