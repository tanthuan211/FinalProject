import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HocTapScreen from './HocTapScreen';
import HocTapScreenDetail from './HocTapScreenDetail';

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
      <Stack.Screen name="HocTapScreen" component={HocTapScreen} options={{ title: 'Thông báo', headerShown: false }} />
      <Stack.Screen name="HocTapScreenDetail" component={HocTapScreenDetail} options={{ title: 'Thông báo', headerShown: false }} />

    
    </Stack.Navigator>
  );
}