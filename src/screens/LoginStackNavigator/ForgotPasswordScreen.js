import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import color from '../../constants/color';

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20, backgroundColor: color.BACKGROUND_PRIMARY}}>
      <View
        style={{
          height: 200,
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 40, fontWeight: '700'}}>Quên mật khẩu</Text>
        <View style={{height: 30}} />
        <Text style={{fontSize: 15}}>
          Hãy nhập email của bạn vào ô bên dưới. Bạn sẽ nhận
        </Text>
        <Text style={{fontSize: 15}}>được một mã số để tạo mật khẩu mới.</Text>
      </View>
      <View
        style={{
          height: 55,
          justifyContent: 'center',
        }}>
        <TextInputComponent
          height={55}
          backgroundColor={color.BACKGROUND_TEXTINPUT}
          borderColor={color.BACKGROUND_TEXTINPUT}
          borderRadius={35}
          placeholder="Nhập email của bạn"
          marginLeftText={20}
        />
      </View>
      <View style={{height: 50}} />
      <View style={{height: 55}}>
        <Button
        height={55}
        textColor={color.WHITE}
          title="Đặt lại mật khẩu"
          color1={color.PRIMARY}
          color2={color.BUTTON_COLOR2}
          borderRadius={30}
        />
      </View>
    </SafeAreaView>
  );
}
