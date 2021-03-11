import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import color from '../../constants/color';

export default function index({
  height,
  iconName,
  placeholder,
  secureTextEntry,
  onChangeText,
  borderWidth,
  borderColor,
  borderBottomWidth,
  backgroundColor,
  borderRadius,
  marginLeftText,
  marginTop,
  colorIcon,
  marginRightIcon,
  onPress,
}) {
  return (
    <View
      style={{
        height: height,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: borderBottomWidth,
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        marginTop: marginTop,
      }}>
      <TextInput
        style={{
          fontSize: 22,
          color: 'white',
          marginLeft: marginLeftText,
        }}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor={color.PRIMARY}
        color="black"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      <Icon
        style={{marginRight: marginRightIcon}}
        name={iconName}
        size={23}
        color={colorIcon}
        onPress={onPress}
      />
    </View>
  );
}
