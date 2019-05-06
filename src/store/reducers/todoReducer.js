import { MOCK_TODOS } from "../../constants";
import { applyAddTodo } from "../actions/todoActions";

const INIT_STATE = MOCK_TODOS;

const todoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return applyAddTodo(state, action);

    case "DELETE_TODO":
      return state;

    case "COMPLETED_TODO":
      return state;

    default:
      return state;
  }
};

export default todoReducer;
