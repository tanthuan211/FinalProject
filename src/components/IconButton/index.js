import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';

export default function index({
  height,
  width,
  title,
  iconName,
  iconColor,
  backgroundColor,
  borderRadius,
}) {
  return (
    
      <View
        style={{
          justifyContent:'flex-end',
          flex: 1,
          shadowColor: '#000000',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0.39,
          shadowRadius: 5,
          elevation: 1,
        }}>
        <TouchableOpacity
          style={{
            height: height,
            width: width,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={iconName} size={28} color={iconColor} />
          </View>
          <View style={{width: 10}} />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: color.PRIMARY,
              }}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    
  );
}
