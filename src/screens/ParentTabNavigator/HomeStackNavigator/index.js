import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './MainScreen';
import ThoiKhoaBieu from './ThoiKhoaBieu';
import SchoolNotiStack from '../ChildScreens/SchoolNotiStack';
import HocTapScreen from '../ChildScreens/HocTapStack/HocTapScreen'

const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Parent_Home_MainScreen"
        component={MainScreen}
        options={{title: 'Trang chủ'}}
      />

      <Stack.Screen
        name="ThoiKhoaBieu"
        component={ThoiKhoaBieu}
        options={{title: 'Thời khoá biểu'}}
      />
      <Stack.Screen
        name="SchoolNotiStack"
        component={SchoolNotiStack}
        options={{title: 'Thời khoá biểu'}}
      />
      <Stack.Screen
        name="HocTapScreen"
        component={HocTapScreen}
        options={{title: 'Thời khoá biểu'}}
      />
    </Stack.Navigator>
  );
}
