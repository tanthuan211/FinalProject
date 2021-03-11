import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../WorkerTabNavigatorPH/HomeScreen';
import ActivityScreen from '../WorkerTabNavigatorPH/ActivityScreen';
import NotificationScreen from '../WorkerTabNavigatorPH/NotificationScreen';
import HealthScreen from '../WorkerTabNavigatorPH/HealthScreen';
import AccountScreen from '../WorkerTabNavigatorPH/AccountScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
   
    <Tab.Navigator
      shifting={false}
      barStyle={{backgroundColor: '#16a085', marginTop: -65}}
      inactiveColor='white'
      activeColor="#f1c40f"
    
      >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="home"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{
          tabBarBadge: true,
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialIcons
                name="notifications"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Hoạt động"
        component={ActivityScreen}
        options={{
          
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="chart-donut"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sức khoẻ"
        component={HealthScreen}
        options={{
          
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="heart"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={AccountScreen}
        options={{
          
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="account"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
   
  );
}
