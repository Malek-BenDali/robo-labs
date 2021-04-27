import * as actionTypes from '../actions/Types';

const initialState = {
  isAuthentificated: false,
  //add
};

export default (state = initialState, action) => {
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
