import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeStackNavigator from './HomeStackNavigator';
import ScoreStackNavigator from './ScoreStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import HealthStackNavigator from './HealthStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';

import color from '../../constants/color';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      shifting={false}
      barStyle={{
        marginTop: -50,
        shadowColor: '#000000',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0.39,
          shadowRadius: 22,
          elevation: 5,

        borderWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        borderColor: color.BACKGROUND_PRIMARY,
        overflow: 'hidden',
      }}
      inactiveColor="gray"
      activeColor={color.PRIMARY}>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* HOME */}
      {/* --------------------------------------------------------------------------------------------- */}    
      <Tab.Screen
        name="Trang chủ"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="home"
                color={focused ? '#16a085' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />

      {/* --------------------------------------------------------------------------------------------- */}
      {/* NOTIFICATION */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="Thông báo"
        component={NotificationStackNavigator}
        options={{
          tabBarBadge: true,
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialIcons
                name="notifications"
                color={focused ? '#16a085' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />

      {/* --------------------------------------------------------------------------------------------- */}
      {/* ACTIVITY */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="Điểm số"
        component={ScoreStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="book-open-variant"
                color={focused ? '#16a085' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />

      {/* --------------------------------------------------------------------------------------------- */}
      {/* HEALTH */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="Sức khoẻ"
        component={HealthStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="heart"
                color={focused ? '#16a085' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />

      {/* --------------------------------------------------------------------------------------------- */}
      {/* ACCOUNT */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="Tài khoản"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="account"
                color={focused ? '#16a085' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
