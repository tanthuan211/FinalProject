import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import color from '../../constants/color';
import GVCNScreen from './ChildScreens/GVCNScreen';
import ActivityScreen from './ActivityScreen';
import HomeScreen from './HomeScreen';
import SchoolNotiScreen from './ChildScreens/SchoolNotiScreen'

const Tab = createMaterialTopTabNavigator();

export default function NotificationScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f1c40f',
          inactiveTintColor: color.PRIMARY,
          showIcon: true,
          labelStyle: {fontSize: 15},
          tabStyle: {width: 100, height: 51},
          indicatorStyle: {
         
            height: 52,
            top: 0,
            backgroundColor: color.WHITE,
            borderColor: color.PRIMARY,
            borderBottomWidth: 2,

          },
          style: {
            backgroundColor: color.WHITE,
            marginBottom: -45,
          },
        }}>
        <Tab.Screen
          name="trường"
          component={SchoolNotiScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="warehouse"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="GVCN"
          component={GVCNScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="face"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Bán trú"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="seat-flat"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Học tập"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="pencil-box-multiple"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
