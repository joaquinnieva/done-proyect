import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/AddTask.css';

const AddTask = ({ addTask, tasks }) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const [idTask, setIdTask] = useState(1);

  const [task, setTask] = useState({
    name: '',
    desc: '',
    todo: '',
  });
  const { name, desc, todo } = task;
  const notify = () => toast('Task no name');
  const addingTask = (task) => {
    setIdTask(idTask + 1);
    if (task.name.length === 0) {
      notify('sin name');
    } else {
      addTask({
        id: idTask,
        ...task,
      });
    }
  };

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="icon-addtask">
      <div className="toastify">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div className={click ? 'form' : 'form-open'}>
        <div className="form-cont">
          <input
            name="name"
            value={name}
            type="text"
            placeholder="name"
            className="input"
            onChange={handleChange}
            autoComplete="off"
          ></input>
          <input
            name="desc"
            value={desc}
            type="text"
            placeholder="description"
            className="input"
            onChange={handleChange}
            autoComplete="off"
          ></input>
          <input
            name="todo"
            value={todo}
            type="date"
            placeholder="day to do it"
            className="input"
            onChange={handleChange}
          ></input>
          <input
            name="submit"
            type="submit"
            value="Add task"
            className="input-send"
            onSubmit={handleSubmit}
            onClick={() => addingTask(task)}
          ></input>
        </div>
      </div>
      <div className={click ? 'ico-cont-at' : 'ico-cont-at-open'} onClick={handleClick}>
        <div className="addtask-lineA"></div>
        <div className="addtask-lineB"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTask(task) {
    dispatch({
      type: 'ADDTASK',
      task,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
