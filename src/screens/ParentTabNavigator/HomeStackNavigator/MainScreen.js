import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import 'moment/locale/vi';
import Swiper from 'react-native-swiper';

import color from '../../../constants/color';
import fontsize from '../../../constants/fontsize';
import IconButton from '../../../components/IconButton';
import logobanner from '../../../assets/logobanner.png';
import IconButtonHome from '../../../components/IconButtonHome';
import {useNavigation} from '@react-navigation/core';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* /// HEADER ///*/}
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          {/*/// LOGO ///*/}
          <View>
            <Image source={logobanner} style={{height: 40, width: 150}} />
          </View>
          <View style={{height: 10}} />
          <View>
            <Text style={{color: color.WHITE}}>
              {moment().format('ddd, L')}
            </Text>
          </View>
        </View>

        {/* /// Hoc sinh BUTTON /// */}
        <View style={styles.hocsinhButton}>
          <IconButton
            height={40}
            width={140}
            title="Học sinh"
            iconName="account-multiple"
            iconColor={color.PRIMARY}
            backgroundColor="white"
            borderRadius={35}
          />
        </View>
      </View>

      {/* /// Thông báo từ nhà trường /// */}
      <View style={styles.lineNotiSchool}>
        <Text style={{fontSize: fontsize.TITLE, fontWeight: '700'}}>
          Thông báo từ nhà trường
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('SchoolNotiStack');
          }}>
          <Text style={{fontSize: fontsize.TITLE, color: color.PRIMARY}}>
            Xem tất cả
          </Text>
          <Icon name="navigate-next" size={30} color={color.PRIMARY} />
        </TouchableOpacity>
      </View>

      {/* /// SWIPER /// */}
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Swiper
          autoplay={true}
          autoplayTimeout={10}
          showsButtons={false}
          activeDotColor={color.PRIMARY}>
          <View style={styles.swiper}>
            <Text>Thong Bao 1</Text>
          </View>
          <View style={styles.swiper}>
            <Text>Thong Bao 2</Text>
          </View>
          <View style={styles.swiper}>
            <Text>Thong Bao 3</Text>
          </View>
        </Swiper>
      </View>

      {/* /// MENU BUTTON /// */}
      <View style={styles.menuButtonContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconButtonHome
              onPress={() => {
                navigation.navigate('ThoiKhoaBieu');
              }}
              iconName="trackpad"
              title="Thời khoá biểu"
            />
          </View>
          <View style={{flex: 1}}>
            <IconButtonHome
              iconName="text-box-check-outline"
              title="Vắng nghỉ"
            />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconButtonHome iconName="subtitles-outline" title="Học phí" />
          </View>
          <View style={{flex: 1}}>
            <IconButtonHome
              iconName="account-clock-outline"
              title="Đăng ký dịch vụ"
            />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <IconButtonHome iconName="image-outline" title="Thư viện ảnh" />
          </View>
          <View style={{flex: 1}}>
            <IconButtonHome iconName="pencil-box-outline" title="Góp ý" />
          </View>
        </View>
      </View>

      {/* /// nhận xét BUTTON /// */}
      <View style={styles.NXButtonContainer}>
        <TouchableOpacity
          style={styles.NXButton}
          onPress={() => {
            navigation.navigate('HocTapScreen');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                color: color.WHITE,
                fontSize: fontsize.TITLE,
                fontWeight: '700',
              }}>
              Nhận xét của giáo viên
            </Text>
            <Icon name="arrow-forward" size={28} color={color.WHITE} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND_PRIMARY,
  },

  headerContainer: {
    flex: 0.75,
    backgroundColor: color.PRIMARY,
    flexDirection: 'row',
  },

  logo: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginHorizontal: 20,
  },

  hocsinhButton: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  lineNotiSchool: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },

  swiper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 20,
  },

  menuButtonContainer: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 10,
  },

  NXButtonContainer: {
    flex: 0.5,
    marginHorizontal: 25,
    marginBottom: 70,
    marginTop: 10,
  },

  NXButton: {
    height: 65,
    backgroundColor: color.PRIMARY,
    borderRadius: 12,
    shadowColor: '#dbd9d9',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.39,
    shadowRadius: 5,
    elevation: 1,
  },
});
