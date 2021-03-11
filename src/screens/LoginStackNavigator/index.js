import React from 'react';
import {View, Text} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ForgotPasswordScreen from './ForgotPasswordScreen';
import WelcomeScreen from './WelcomeScreen';
import CreateAccountScreen from './CreateAccountScreen';
import SchoolNotiScreen from '../WorkerTabNavigatorPH/ChildScreens/SchoolNotiScreen';
import ScholNotiDetailScreen from '../WorkerTabNavigatorPH/ChildScreens/ScholNotiDetailScreen';
import TabNavigator from '../NavigatorPH/TabNavigator';

const Stack = createStackNavigator();

export default function index() {
  return (
   
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
      </Stack.Navigator>
    
  );
}
