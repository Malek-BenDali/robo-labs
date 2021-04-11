import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Welcome} from '../app';

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Welcome} />
    </Drawer.Navigator>
  );
}
