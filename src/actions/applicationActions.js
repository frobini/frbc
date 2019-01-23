import * as types from './actionTypes';

export function createApplication(application) {
  return {type: types.CREATE_APPLICATION, application};
}
