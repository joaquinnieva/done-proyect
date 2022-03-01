import React from 'react';
import { connect } from 'react-redux';
import '../styles/Tasks.css';
import Images from './Images';

const Tasks = ({ tasks, taskDone, tasksdone, taskRemove }) => {
  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <p className="notasks">Add tasks to do</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="card-info-v">
              <input type="radio" className="card-checkbox" onClick={() => taskDone(task)}></input>
              <div className="card-name">{task.name}</div>
              <div className="card-options">
                <img src={Images.options} alt="options" onClick={() => taskRemove(task)} />
              </div>
            </div>

            <div className="card-desc">description: {task.desc}</div>
            <div className="card-todo">date: {task.todo}</div>
          </div>
        ))
      )}

      {tasksdone.length === 0 ? null : <div className="tasks-done">Tasks done</div>}
      {tasksdone.map((task) => (
        <div className="task-card" key={task.id}>
          <div className="card-info-v">
            <div className="card-checkbox-fix"></div>
            <div className="card-name">{task.name}</div>
            <div className="card-options">
              <img src={Images.options} alt="options" onClick={() => taskRemove(task)} />
            </div>
          </div>

          <div className="card-desc">description: {task.desc}</div>
          <div className="card-todo">date: {task.todo}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  tasksdone: state.tasksdone,
});

const mapDispatchToProps = (dispatch) => ({
  taskDone(task) {
    dispatch({
      type: 'TASKDONE',
      task,
    });
  },
  taskRemove(task) {
    dispatch({
      type: 'TASKREMOVE',
      task,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
