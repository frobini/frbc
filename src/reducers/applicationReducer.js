import * as types from '../actions/actionTypes';

export default function applicationReducer(state = [], action) {
 switch(action.type){
   case types.LOAD_APPLICATIONS_SUCCESS:
     return action.applications;


   default:
     return state;
 }
}
