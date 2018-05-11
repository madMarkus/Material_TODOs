import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import taskReducer from "./tasksReducer";

export default combineReducers({
  todos: todosReducer,
  tasks: taskReducer
});
