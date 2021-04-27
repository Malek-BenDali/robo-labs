import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import AsyncStorage from '@react-native-community/async-storage';
// import {persistReducer, persistStore} from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
// const reducers = combineReducers({AuthReducer});

// const persistStateReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistStateReducer, compose(applyMiddleware(thunk)));
const store = createStore(reducers, compose(applyMiddleware(thunk))); // a effacer pour persister
// const persistor = persistStore(store);

export {store};
