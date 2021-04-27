import React from 'react';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isAuthentificated = useSelector(state => state.auth.isAuthentificated);
  return (
    <NavigationContainer>
      {isAuthentificated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
