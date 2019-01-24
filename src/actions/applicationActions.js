import * as types from './actionTypes';
import applicationApi from '../api/mockApplicationApi';

export function loadApplicationsSuccess(applications) {
  return {type: types.LOAD_APPLICATIONS_SUCCESS, applications};
}


export function  loadApplications() {
  return function (dispatch) {
    return applicationApi.getAllApplications().then(applications =>   {
      dispatch(loadApplicationsSuccess(applications));
    }).catch(error => {
      throw (error);
    });
  };
}
