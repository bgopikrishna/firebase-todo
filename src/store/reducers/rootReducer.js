import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  authState: authReducer,
  todoState: todoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
