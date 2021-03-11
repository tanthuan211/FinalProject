import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';

export default function index({
  title,
  width,
  color1,
  color2,
  borderRadius,
  onPress,
  height,
  textColor,
}) {
  return (
    <View
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowOpacity: 0.39,
        shadowRadius: 5,
        elevation: 1,
      }}>
      <LinearGradient
        borderRadius={borderRadius}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[color1, color2]}>
        <TouchableOpacity
          style={{
            height: height,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPress}>
          <Text style={{color: textColor, fontWeight: '700', fontSize: 22}}>
            {title}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
