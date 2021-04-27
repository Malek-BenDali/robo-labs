import AuthReducer from './AuthReducer';
import RobotsReducer from './RobotsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  auth: AuthReducer,
  robots: RobotsReducer,
});
