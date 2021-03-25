import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import fontsize from '../../../../constants/fontsize';
import color from '../../../../constants/color'

export default function GVCNScreenDetail({navigation, route}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="left" size={20} color="black" />
          <Text style={{fontSize: 20}}>Trở lại</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 30}} />

      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: '700', fontSize: fontsize.TITLE, color:color.PRIMARY}}>
          {route.params.item.title}
        </Text>
      </View>
      <View style={{height: 30}} />
      <View style={{alignItems: 'center'}}>
        <Text>{route.params.item.time}</Text>
      </View>
        <View style={{height: 30}} />
      <View style={{alignItems: 'center', marginHorizontal: 5}}>
        <Text style={{fontSize: fontsize.CONTENT}}>
          {route.params.item.content}
        </Text>
      </View>
    </SafeAreaView>
  );
}
