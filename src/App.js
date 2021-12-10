import React from "react";
import "./app.css";
import Sidebar from "./Sidebar";
import Task from "./Task";
import Details from "./Details";

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <Task className="task" />
      <Details className="details" />
    </div>
  );
}

export default App;
