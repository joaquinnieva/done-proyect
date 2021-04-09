import React, { useState } from "react";
import "./styles/AddTask.css";
import { connect } from "react-redux";


const AddTask = ({ addTask, tasks }) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [task, setTask] = useState({
    name:"",
    desc:"",
    todo:""
  });
  const {name, desc, todo} = task

  const handleChange = (e) =>{
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="icon-addtask">
        <div className={click ? "form" : "form-open"}>
        <div className="form-cont">
          <input name="name" value={name} type="text"   placeholder="name"           className="input" onChange={handleChange}></input>
          <input name="desc" value={desc} type="text"   placeholder="description"    className="input" onChange={handleChange}></input>
          <input name="todo" value={todo} type="number" placeholder="days to do it"  className="input" onChange={handleChange}></input>
          <input name="submit" type="submit" value="Add task"  className="input-send" onSubmit={handleSubmit} onClick={() => addTask(task)}></input>
        </div>
      </div>
      <div className={click ? "ico-cont-at" : "ico-cont-at-open"} onClick={handleClick}>
        <div className="addtask-lineA"></div>
        <div className="addtask-lineB"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  addTask(task) {
    dispatch({
      type: "ADDTASK",
      task,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);