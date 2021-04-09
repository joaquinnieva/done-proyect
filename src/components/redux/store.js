import { createStore } from "redux";

// constantes
const initialState = {
  tasks: [
    {
      name: "joda",
      desc: "juani",
      todo: "1",
    },
  ],
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

    // case "TASKDONE":
    //   return {
    //     ...state,

    //   };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(productReducer);
