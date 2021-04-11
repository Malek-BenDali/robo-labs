import * as actionTypes from '../actions/Types';

const initialState = {
  isAuthentificated: false,
  //add
};

const AuthReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.AUTHENTIFICATED:
      nextState = {isAuthentificated: true};
      return nextState || state;
    default:
      return state;
  }
};

export default AuthReducer;
