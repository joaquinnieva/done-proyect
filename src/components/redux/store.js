import { createStore } from "redux";

// constantes
const initialState = {
  tasks: [],
  tasksdone: [],
};

// types

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTASK":
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };

    case "TASKDONE":
      return {
        ...state,
        tasksdone: state.tasksdone.concat(action.task),
        tasks: state.tasks.filter((task) => task.name !== action.task.name),
      };

    case "TASKREMOVE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.name !== action.task.name),
        tasksdone: state.tasksdone.filter((task) => task.name !== action.task.name),
      };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(productReducer);
