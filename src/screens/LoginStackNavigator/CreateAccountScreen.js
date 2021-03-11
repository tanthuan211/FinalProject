import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import color from '../../constants/color';

export default function SignInScreen({navigation}) {
    const [secureTextEntry, setsecureTextEntry] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const [pass, setPass] = React.useState(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.BACKGROUND_PRIMARY}}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 40, fontWeight: '700'}}>Tạo tài khoản</Text>
      </View>
      <View style={{flex: 2, marginHorizontal: 30}}>
        <TextInputComponent
          marginTop={20}
          marginLeftText={30}
          height={55}
          placeholder="Email"
          backgroundColor={color.BACKGROUND_TEXTINPUT}
          borderColor={color.BACKGROUND_TEXTINPUT}
          borderRadius={30}
          onChangeText={(email) => {
              setUser(email);
          }}
        />
        <TextInputComponent
          marginTop={20}
          marginLeftText={30}
          height={55}
          placeholder="Mật khẩu"
          backgroundColor={color.BACKGROUND_TEXTINPUT}
          borderColor={color.BACKGROUND_TEXTINPUT}
          borderRadius={30}
          secureTextEntry={secureTextEntry}
          iconName={secureTextEntry ? 'eye-slash' : 'eye'}
          colorIcon='gray'
          marginRightIcon={15}
          onPress={() => {
            let s = !secureTextEntry;
            setsecureTextEntry(s);
          }}
        />
        <TextInputComponent
          marginTop={20}
          marginLeftText={30}
          height={55}
          placeholder="Nhập lại mật khẩu"
          backgroundColor={color.BACKGROUND_TEXTINPUT}
          borderColor={color.BACKGROUND_TEXTINPUT}
          borderRadius={30}
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => {
            setPass(password);
          }}
        />
      </View>
      <View style={{flex: 3, marginHorizontal: 30}}>
        <View style={{height: 65}}>
          <Button
          height={55}
            title="Tạo tài khoản"
            textColor={color.WHITE}
            color1={color.PRIMARY}
            color2={color.BUTTON_COLOR2}
            borderRadius={30}
            onPress={() => {
                auth()
                    .createUserWithEmailAndPassword(user, pass)
                    .then(() => {
                        console.log('Tao tai khoan thanh cong')
                    });                   
            }}
          />
        </View>
        <View
          style={{height: 50, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={() => {
              navigation.navigate('Welcome');
          }}>
            <Text style={{fontSize: 18, color: color.PRIMARY}}> ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
