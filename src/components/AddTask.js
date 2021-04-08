import React, { useState } from "react";
import "./styles/AddTask.css";


const AddTask = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [info, setInfo] = useState({
    name:"",
    desc:"",
    todo:""
  });
  const {name, desc, todo} = info

  const handleChange = (e) =>{
    setInfo({
      ...info,
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
          <input name="submit" type="submit" value="Add task"  className="input-send" onSubmit={handleSubmit}></input>
        </div>
      </div>
      <div className={click ? "ico-cont-at" : "ico-cont-at-open"} onClick={handleClick}>
        
        <div className="addtask-lineA"></div>
        <div className="addtask-lineB"></div>
      </div>
    </div>
  );
};
export default AddTask;
