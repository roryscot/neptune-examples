import { combineReducers } from 'redux';
import auth from "./authReducer";
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  auth,
  ajaxCallsInProgress,
});

export default rootReducer;