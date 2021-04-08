import { createStore } from "redux";

// constantes
const initialState = {
  tasks: [],
  tasksdone: []
};

// types

// reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTASK":
      return {
        ...state,

      };

    case "TASKDONE":
      return {
        ...state,

      };

    default:
      return state;
  }
};

// acciones

// store
export default createStore(productReducer);
