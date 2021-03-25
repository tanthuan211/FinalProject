import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';

import color from '../../../../constants/color';
import fontsize from '../../../../constants/fontsize';
import FirestoreService from '../../../../services/FirestoreService';



export default function SchoolNotiScreen({navigation}) {

  const [loading, setLoading] = React.useState(true);
  const [notis, setNotis] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FirestoreService.getNXBTofClass('jOkdBAfy0hGT4t6jUvIK')
      .then((result) => {
        console.log('Notis: ', result);
        setNotis(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginTop: 5,
          height: 130,
          backgroundColor: color.WHITE,
          marginHorizontal: 2,
          borderRadius: 4,
          shadowColor: '#000000',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0.39,
          shadowRadius: 3,
          elevation: 1,
        }}>
        <View style={{flex: 1, marginHorizontal: 8, marginTop: 5}}>
          <Text style={{color: color.PRIMARY, fontSize: fontsize.TITLE}}>
            {notis[index].title}
          </Text>
        </View>
        <View style={{flex: 2, marginHorizontal: 8, alignItems: 'center'}}>
          <Text numberOfLines={3} style={{fontSize: fontsize.CONTENT}}>
            {notis[index].content}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>{notis[index].time}</Text>
          </View>

          <TouchableOpacity onPress={() => {
            navigation.navigate('BanTruScreenDetail', {item: notis[index]});
          }}>
            <Text style={{color: color.LINK}}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 5}}>
      <FlatList
        numColumns={1}
        data={notis}
        keyExtractor={(item, index) => 'data-' + item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}