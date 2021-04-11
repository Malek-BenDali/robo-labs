import React from 'react';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

const App = ({isAuthentificated}) => {
  return (
    <NavigationContainer>
      {isAuthentificated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  isAuthentificated: state.isAuthentificated,
});

export default connect(mapStateToProps)(App);
