import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function HealthStackNavigator() {
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
      <Stack.Screen name="Parent_Activity_MainScreen" component={MainScreen} options={{ title: 'Hoạt động', headerShown: false }} />
    </Stack.Navigator>
  );
}