import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';

export default function index({title, iconName, iconColor ,color1, color2}) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
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
          borderRadius={12}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[color1, color2]}>
          <TouchableOpacity
            style={{
              height: 80,
              width: 190,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: color.WHITE,
                  borderRadius: 25,
                }}>
                <Icon name={iconName} size={22} color={iconColor} />
              </View>
            </View>

            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  // fontWeight: '700',
                  color: color.WHITE,
                }}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
