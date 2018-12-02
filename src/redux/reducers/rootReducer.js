import { combineReducers } from 'redux';
import auth from "./authReducer";
import product from './productReducer'
import monitors from './monitorsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  auth,
  product,
  ajaxCallsInProgress,
});

export default rootReducer;