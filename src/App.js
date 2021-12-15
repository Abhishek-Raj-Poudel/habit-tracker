import React from "react";
import "./app.css";
import Sidebar from "./Sidebar";
import Task from "./Task";
import TaskComplete from "./TaskComplete";
import Details from "./Details";

function App() {
  return (
    <div className="app">
      <Sidebar className="app__sidebar" />
      <div className="app__tasks">
        <Task />
        <TaskComplete />
      </div>
      <Details className="details" />
    </div>
  );
}

export default App;
