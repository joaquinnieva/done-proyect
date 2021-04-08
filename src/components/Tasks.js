import React from "react";
import "./styles/Tasks.css";
import Images from "./Images";
import { connect } from "react-redux";

const Tasks = () => {
  return (
    <div>
      <div className="task-card">
        <input type="checkbox" className="card-checkbox"></input>
        <div className="card-name">Name</div>
        <div className="card-options">
          <img src={Images.options} alt="options"/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  agregarElegido(tasks) {
    dispatch({
      type: "ELEGIDO",
      tasks,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
