import React from "react";
import "./styles/Main.css";
import Tasks from "./Tasks";
import Images from "./Images";

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="filters-container">
          <div className="filters-calendar">
            <img src={Images.calendar} alt="filt"/>
          </div>
          <div className="filters-fav">
            <img src={Images.fav} alt="filt"/>
          </div>
        </div>
        <div className="task-container">
          <Tasks />
        </div>
      </div>
    </main>
  );
};
export default Main;
