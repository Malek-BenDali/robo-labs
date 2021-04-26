import * as actionTypes from './Types';

const Login = payload => dispatch => {
  return dispatch({
    type: actionTypes.AUTHENTIFICATED,
    payload,
  });
};

const Logout = payload => dispatch => {
  return dispatch({
    type: actionTypes.LOGOUT,
    payload,
  });
};

export {Login, Logout};
