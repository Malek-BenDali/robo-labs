import * as actionTypes from './Types';

const Login = payload => dispatch => {
  console.log('hola');
  return dispatch({
    type: actionTypes.AUTHENTIFICATED,
    payload,
  });
};

export {Login};
