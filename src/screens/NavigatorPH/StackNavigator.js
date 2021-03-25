import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import HomeScreen from '../WorkerTabNavigatorPH/HomeScreen';
// import NotificationScreen from '../WorkerTabNavigatorPH/NotificationScreen';
// import SchoolNotiScreen from '../WorkerTabNavigatorPH/ChildScreens/SchoolNotiScreen';
// import GVCNScreen from '../WorkerTabNavigatorPH/ChildScreens/GVCNScreen';
// import TabNavigator from '../NavigatorPH/TabNavigator';

const Stack = createStackNavigator();
// const Tabtop = createMaterialTopTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function StackNavigator() {
  function School() {
    return (
      <Tab.Navigator headerMode="none">
        {/* <Tab.Screen name="NotificationScreen" component={NotificationScreen} /> */}
        <Tabtop.Screen name="SchoolNotiScreen" component={SchoolNotiScreen} />
      </Tab.Navigator>
    );
  }
  function GVCN() {
    return (
      <Tab.Navigator headerMode="none">
        {/* <Tab.Screen name="NotificationScreen" component={NotificationScreen} /> */}
        <Tabtop.Screen name="GVCNScreen" component={GVCNScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="School" component={School} />
      <Stack.Screen name="GVCN" component={GVCN} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      
    </Stack.Navigator>
  );
}
