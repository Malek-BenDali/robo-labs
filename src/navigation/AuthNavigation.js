import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../auth/screens';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
