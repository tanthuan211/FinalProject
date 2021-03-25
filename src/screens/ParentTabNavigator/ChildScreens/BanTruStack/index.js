import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BanTruScreen from './BanTruScreen';
import BanTruScreenDetail from './BanTruScreenDetail';

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
      <Stack.Screen name="BanTruScreen" component={BanTruScreen} options={{ title: 'Thông báo', headerShown: false }} />
      <Stack.Screen name="BanTruScreenDetail" component={BanTruScreenDetail} options={{ title: 'Thông báo', headerShown: false }} />

    
    </Stack.Navigator>
  );
}