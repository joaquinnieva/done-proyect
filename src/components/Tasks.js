import React from "react";
import "./styles/Tasks.css";
import Images from "./Images";
import { connect } from "react-redux";

const Tasks = ( { tasks } ) => {
  return (
    <div>{tasks.length === 0 ? (
      <p>Add tasks to do...</p>
    ) :tasks.map((task) => (
      <div className="task-card" key={task.name}>
        <input type="checkbox" className="card-checkbox"></input>
        <div className="card-name">{task.name}</div>
        <div className="card-options">
          <img src={Images.options} alt="options"/>
        </div>
      </div>))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
