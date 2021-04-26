import * as actionTypes from '../actions/Types';

const initialState = {
  isAuthentificated: false,
  //add
};

const AuthReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case actionTypes.AUTHENTIFICATED:
      return {
        ...state,
        isAuthentificated: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
