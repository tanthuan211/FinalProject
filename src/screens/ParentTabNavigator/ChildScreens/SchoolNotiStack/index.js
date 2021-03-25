import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SchoolNotiScreen from './SchoolNotiScreen';
import ScholNotiDetailScreen from './ScholNotiDetailScreen';
import HomeStackNavigator from '../../HomeStackNavigator';


const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="SchoolNotiScreen" component={SchoolNotiScreen} options={{ title: 'Thông báo', headerShown: false }} />
      <Stack.Screen name="ScholNotiDetailScreen" component={ScholNotiDetailScreen} options={{ title: 'Thông báo', headerShown: false }} />
     

    
    </Stack.Navigator>
  );
}