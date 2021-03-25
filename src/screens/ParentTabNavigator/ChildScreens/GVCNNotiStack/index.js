import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GVCNScreen from './GVCNScreen';
import GVCNScreenDetail from './GVCNScreenDetail';

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
      <Stack.Screen name="GVCNScreen" component={GVCNScreen} options={{ title: 'Thông báo', headerShown: false }} />
      <Stack.Screen name="GVCNScreenDetail" component={GVCNScreenDetail} options={{ title: 'Thông báo', headerShown: false }} />

    
    </Stack.Navigator>
  );
}