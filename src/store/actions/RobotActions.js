import * as actionTypes from './Types';

export const addRobot = name => dispatch => {
  return dispatch({
    type: actionTypes.ADD_ROBOT,
    payload: {
      name,
    },
  });
};
export const updateRobot = () => {};
export const deleteRobot = () => {};
