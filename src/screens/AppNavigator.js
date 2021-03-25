import React from 'react';
import auth from '@react-native-firebase/auth';

import LoginStackNavigator from './LoginStackNavigator';
import ParentTabNavigator from './ParentTabNavigator';



//Navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


const AuthenticationStackNavigator = () => {
  const [signedInUser, setSignedInUser] = React.useState(null);

  //Handle user state changes
  const onAuthStateChanged = (user) => {
    if (user) {
      setSignedInUser(user);
    } else {
      setSignedInUser(null);
    }
  };

  React.useEffect(() => {
    const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber; // unsubcriber on unmount
  }, []);

  //Not signed in
  if (!signedInUser) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="LoginStackNavigator"
          component={LoginStackNavigator}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ParentTabNavigator" component={ParentTabNavigator} />
  

    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
