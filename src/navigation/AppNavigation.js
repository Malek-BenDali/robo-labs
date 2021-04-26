import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {RobotDetails, RobotScreen, UsersScreen} from '../app/screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Robots() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Robots" component={RobotScreen} />
      <Stack.Screen name="RobotDetails" component={RobotDetails} />
    </Stack.Navigator>
  );
}
function Users() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.primary,
      }}>
      <Drawer.Screen
        name="Robots"
        component={Robots}
        options={{
          drawerIcon: drawerConfig => (
            <MaterialCommunityIcons
              name="robot"
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
      <Drawer.Screen name="Users" component={Users} />
    </Drawer.Navigator>
  );
}
