import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

// import WelcomeScreen from '../screens/LoginStackNavigator/WelcomeScreen';
// import TabNavigator from '../screens/TabNavigator';

import AppNavigator from '../screens/NavigatorPH/AppNavigator';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <WelcomeScreen /> */}
      {/* <ForgotPasswordScreen/> */}
      <AppNavigator/>
      {/* <TabNavigator/> */}
    </View>
  );
};

export default App;