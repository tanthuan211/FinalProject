import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

// import WelcomeScreen from '../screens/LoginStackNavigator/WelcomeScreen';
// import TabNavigator from '../screens/TabNavigator';
import Container from '../components/Container';

import AppNavigator from '../screens/AppNavigator';
const App = () => {
  return (
    <View style={{flex: 1}}>
     
      <AppNavigator/>
      {/* <Container /> */}
      
    </View>
  );
};

export default App;