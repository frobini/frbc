import { combineReducers } from 'redux';
import applications from './applicationReducer';

const rootReducer = combineReducers({
  applications
});

export default rootReducer;
