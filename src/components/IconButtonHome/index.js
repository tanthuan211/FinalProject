import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import color from '../../constants/color';
import fontsize from '../../constants/fontsize';

export default function index({iconName, title, onPress}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <TouchableOpacity
              style={{
                height: 100,
                width: 180,
                borderWidth: 1,
                borderColor: color.BACKGROUND_PRIMARY,
                backgroundColor: color.WHITE,
                borderRadius: 12,
                shadowColor: '#dbd9d9',
                shadowOffset: {
                  height: 5,
                  width: 0,
                },
                shadowOpacity: 0.39,
                shadowRadius: 5,
                elevation: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={onPress}
              >
              <Icon name={iconName} size={33} color={color.PRIMARY} />
              <View style={{height: 5}} />
              <Text
                style={{
                  fontSize: fontsize.TITLE,
                  color: color.PRIMARY,
                  fontWeight: '700',
                  fontSize: 20,
                }}>
             {title}
              </Text>
            </TouchableOpacity>
        </View>
    )
}
