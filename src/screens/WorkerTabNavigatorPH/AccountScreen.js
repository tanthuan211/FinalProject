import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

export default function NotificationScreen() {
  return (
    <SafeAreaView>
      <Text>TAI KHOAN</Text>
      <Button title="Log out" onPress={() => {
                auth()
                    .signOut()
                    .then(() => console.log('Log out'));
            }} />
    </SafeAreaView>
  );
}