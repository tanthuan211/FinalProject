import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MealScreen from './MealScreen';
import TotalMedicalScreen from './TotalMedicalScreen';
import MonthlyScreen from './MonthlyScreen'

import Container from '../../../components/Container';
import color from '../../../constants/color';

const Tab = createMaterialTopTabNavigator();

export default function MainScreen() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#f1c40f',
          inactiveTintColor: color.PRIMARY,
          showIcon: true,
          labelStyle: {fontSize: 15},
          tabStyle: {width: 135, height: 51, marginTop: 40},
          indicatorStyle: {
            height: 52,
            top: 0,
            backgroundColor: color.WHITE,
          },
          style: {
            backgroundColor: color.WHITE,
            marginBottom: -45,
          },
        }}>
        <Tab.Screen
          name="Tổng quát"
          component={TotalMedicalScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="sort-reverse-variant"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Tháng"
          component={MonthlyScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="calendar-month"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Thực đơn"
          component={MealScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon
                  name="cupcake"
                  color={focused ? '#f9ca24' : '#16a085'}
                  size={22}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
