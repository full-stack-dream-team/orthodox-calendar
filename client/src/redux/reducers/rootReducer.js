import { combineReducers } from "redux";
import authReducer from "./authReducer";
import calendarReducer from "./calendarReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  errors: errorReducer,
});

export default rootReducer;
