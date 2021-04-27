import * as actionTypes from '../actions/Types';
import Robot from '../../models/Robot';
import uuid from 'react-native-uuid';

const initialState = {
  robots: [],
  //add
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ROBOT:
      const {name} = action.payload;
      const newRobot = new Robot(uuid.v4(), name, Date.now(), true);
      return {...state, robots: [...state.robots, newRobot]};
    default:
      return state;
  }
};
