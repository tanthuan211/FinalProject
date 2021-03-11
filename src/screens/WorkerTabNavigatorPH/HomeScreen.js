import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';
import fontsize from '../../constants/fontsize';
import IconButton from '../../components/IconButton';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 35,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Icon name="phone" size={30} color={color.PRIMARY} />
        </TouchableOpacity>
        <Text
          style={{
            color: color.PRIMARY,
            fontSize: fontsize.TITLE,
            fontWeight: '700',
          }}>
          SKY-LINE
        </Text>
        <TouchableOpacity>
          <Icon name="account" size={30} color={color.PRIMARY} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 5, marginHorizontal: 10}}>
        <View
          style={{
            flex: 1,
            backgroundColor: color.WHITE,
            borderColor: color.PRIMARY,
            borderWidth: 2,
            borderRadius: 8,
            shadowColor: '#000000',
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowOpacity: 0.39,
            shadowRadius: 5,
            elevation: 1,
          }}>
          <View style={{flex: 1, marginHorizontal: 5}}>
            <View style={{height: 22}}>
              <Text style={{color: color.PRIMARY, fontSize: 16}}>
                Thông báo của nhà trường
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: 5,
                alignItems: 'flex-start',
              }}>
              <Text style={{color: color.TITLE, fontSize: fontsize.TITLE}}>
                Bản tin Sky-line tháng 02/2021
              </Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate ('trường');
              }}>
                <Text style={{color: color.LINK}}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <Text>01/03/2021</Text>
              <View style={{width: 8}} />
              <Text>10:11:35</Text>
            </View>
            <View
              style={{
                flex: 3,
              }}>
              <Text style={{fontSize: fontsize.CONTENT}}>
                Hệ thống giáo dục Sky-line kính gửi Quý phụ huynh bảng tổng hợp
                hoạt động của khối mầm non trong tháng 02/2021.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: color.WHITE,
            borderColor: color.PRIMARY,
            borderWidth: 2,
            borderRadius: 8,
            shadowColor: '#000000',
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowOpacity: 0.39,
            shadowRadius: 5,
            elevation: 1,
            marginTop: 8,
          }}>
          <View style={{flex: 1, marginHorizontal: 5}}>
            <View style={{height: 22}}>
              <Text style={{color: color.PRIMARY, fontSize: 16}}>
                Thông báo của GVCN
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',

                marginTop: 5,
                alignItems: 'flex-start',
              }}>
              <Text style={{color: color.TITLE, fontSize: fontsize.TITLE}}>
                Nhận xét học tập
              </Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate ('GVCN');
              }}>
                <Text style={{color: color.LINK}}>Xem tất cả</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text>01/03/2021</Text>
              <View style={{width: 8}} />
              <Text>10:11:35</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: fontsize.CONTENT}}>
                Tuần này cháu hào hứng hoạt động tạo hình "Làm cây dù từ đĩa
                giấy". Cháu có kỹ năng cắt, dán tốt, biết phối màu sắc hài hoà.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 7, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Học Tập"
              iconName="pencil-box-multiple"
              iconColor="#FF5F6D"
              color1="#FF5F6D"
              color2="#FF8A47"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Gửi lời nhắn"
              iconName="script-text"
              iconColor="#0F7FD7"
              color1="#0F7FD7"
              color2="#0B9ADC"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Vắng nghỉ"
              iconName="table-clock"
              iconColor="#5E9904"
              color1="#5E9904"
              color2="#8AC500"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Học phí"
              iconName="ballot"
              iconColor="#37A2A0"
              color1="#37A2A0"
              color2="#00D3A9"
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Bán trú"
              iconName="seat-flat"
              iconColor="#FF8C1E"
              color1="#FF8C1E"
              color2="#FFC330"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="GVCN"
              iconName="face"
              iconColor="#B53471"
              color1="#B53471"
              color2="#ED4C67"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Ảnh lớp"
              iconName="tooltip-image"
              iconColor="#9964E0"
              color1="#9964E0"
              color2="#938AFD"
            />
          </View>
          <View style={{height: 85, marginTop: 15}}>
            <IconButton
              title="Dịch vụ khác"
              iconName="message-plus-outline"
              iconColor="#5758BB"
              color1="#5758BB"
              color2="#9980FA"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
