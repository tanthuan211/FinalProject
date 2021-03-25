import React from 'react';
import propTypes from 'prop-types';
import {View, Text, SafeAreaView} from 'react-native';

import {Appbar, Button, Divider, Drawer, Menu} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
import color from '../constants/color';

const Container = ({
  ready,
  title,
  subTitle,
  showAppbar,
  showBackButton,
  showActionButton,
  actionButton,
  style,
  children,
}) => {
  const navigation = useNavigation();

  return (
    <View flex={1}>
      {showAppbar && (
        <Appbar.Header style={{backgroundColor: color.PRIMARY}} dark>
          {showBackButton && (
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
          )}
         <Appbar.Content title={title} subtitle={subTitle} titleStyle={{ fontFamily: 'Arial', fontSize: 18 }} subtitleStyle={{ fontFamily: 'Arial', fontSize: 16 }} />
         <Appbar.Action icon="magnify" onPress={() => {}} />
         {showActionButton && (
            <Appbar.Action
              onPress={() => {
                navigation.openDrawer();
              }}
              icon={actionButton.icon}
            />
          )}
        </Appbar.Header>
      )}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[{ flex: 1, borderRadius: 0, backgroundColor: color.BACKGROUND_PRIMARY }, style]}>
          {!ready && <Loading />}
          <View style={{ flex: 1, display: ready ? 'flex' : 'none' }}>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};
Container.defaultProps = {
    style: {},
    title: 'TITLE',
    subTitle: 'Sub title',
    showAppbar: false,
    showBackButton: false,
    showMenuButton: false,
    ready: true,
    children: null,
  };
  
  Container.propTypes = {
    ready: propTypes.bool,
    title: propTypes.string,
    subTitle: propTypes.string,
    showAppbar: propTypes.bool,
    showActionButton: propTypes.bool,
    style: propTypes.oneOfType([propTypes.object, propTypes.array]),
    children: propTypes.instanceOf(Object),
  };
  
  export default React.memo(Container);
