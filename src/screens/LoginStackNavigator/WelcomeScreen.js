import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';

import Logocenter from '../../assets/logoskyline.png';
import Logoleft from '../../assets/sls.png';
import Logoright from '../../assets/sks.png';

import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import color from '../../constants/color';
import {ImageBackground} from 'react-native';

export default function WelcomeScreen({navigation}) {
  const [secureTextEntry, setsecureTextEntry] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const [pass, setPass] = React.useState(null);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        blurRadius={3}
        source={{
          uri:
            'https://lh3.googleusercontent.com/proxy/2RbI7-QfDLEqcgQ6xXgwGK_GHiVJBLlAwrNpT0IEmXgq1AJFhqa2ej-DEXtxrz12PKBZ2-R8idlKAvrglDXZk7VgILnj',
        }}>
        <View style={{flex: 1.5}}>
          <View style={{flex: 2, alignItems: 'center', marginTop: 100}}>
            <Image source={Logocenter} style={{height: 170, width: 250}} />
          </View>
        </View>
        <View style={{flex: 1, marginHorizontal: 35}}>
          <View
            style={{
              flex: 0.5,
            }}>
            <TextInputComponent
              marginLeftText={5}
              height={40}
              colorIcon={color.PRIMARY}
              iconName="user-circle"
              placeholder="Tên đăng nhập"
              borderColor={color.PRIMARY}
              borderBottomWidth={2}
              marginLeft={10}
              onChangeText={(text1) => {
                setUser(text1);
              }}
            />
          </View>
          <View style={{height: 30}} />
          <View
            style={{
              flex: 0.5,
            }}>
            <TextInputComponent
              marginLeftText={5}
              height={40}
              colorIcon={color.PRIMARY}
              placeholder="Mật khẩu"
              secureTextEntry={secureTextEntry}
              iconName={secureTextEntry ? 'eye-slash' : 'eye'}
              borderColor={color.PRIMARY}
              borderBottomWidth={2}
              marginLeft={10}
              onChangeText={(text2) => {
                setPass(text2);
              }}
              onPress={() => {
                let s = !secureTextEntry;
                setsecureTextEntry(s);
              }}
            />
          </View>
          <View style={{height: 40}} />
          <View style={{flex: 1.5}}>
            <View>
              <Button
                height={55}
                borderRadius={35}
                title="ĐĂNG NHẬP SỔ LIÊN LẠC"
                textColor={color.WHITE}
                color1={color.PRIMARY}
                color2={color.BUTTON_COLOR2}
                onPress={() => {
                  auth()
                    .signInWithEmailAndPassword(user, pass)
                    .then((result) => {
                      console.log(result);
                      console.log('Log in successed!');
                      console.log(user);
                      console.log(pass);
                    })
                    .catch((error) => {
                      console.log(error);
                      Alert.alert(
                        'Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại!',
                      );
                    });
                }}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateAccountScreen');
                console.log('Go');
              }}>
              <Text style={{color: '#0097e6', fontSize: 18}}>
                Tạo tài khoản
              </Text>
            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                  console.log('Go');
                }}>
                <Text style={{color: color.WHITE, fontSize: 18}}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {/* <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <IconButton
              height={40}
              width={120}
              borderRadius={20}
              title="trợ giúp"
              titleColor={color.PRIMARY}
              iconSize={18}
              iconName="questioncircle"
              iconColor={color.PRIMARY}
              color1={color.WHITE}
              color2={color.WHITE}
            />
          </View> */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="copyright" size={15} color="#16a085" />
            <View style={{width: 5}} />
            <Text style={{color: color.PRIMARY, fontSize: 18}}>
              Bản quyền thuộc về SKY-LINE
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
