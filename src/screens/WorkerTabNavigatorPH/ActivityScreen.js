import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import color from '../../constants/color';
import HealthScreen from './HealthScreen';
import HomeScreen from './HomeScreen';
import SchoolNotiScreen from './ChildScreens/SchoolNotiScreen'


export default function NotificationScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
       <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f1c40f',
          inactiveTintColor: color.PRIMARY,
          showIcon: true,
          labelStyle: {fontSize: 11},
          tabStyle: {width: 140, height: 51},
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
          name="Hoạt động trên lớp"
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
          component={HealthScreen}
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