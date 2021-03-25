import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

import color from '../../../../constants/color';
import fontsize from '../../../../constants/fontsize';
import {FlatList} from 'react-native-gesture-handler';


export default function SchoolNotiScreen({navigation}) {
  const [noti, setNoti] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  const getData = () => {
    const data = [];
    firestore()
      .collection('ThongBao')
      .orderBy('id', 'desc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          data.push(item);
        });
        setLoading(false);
        setNoti(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setNoti([]);
      });
  };

  React.useEffect(getData, []);

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
            {noti[index].title}
          </Text>
        </View>
        <View style={{flex: 2, marginHorizontal: 8, alignItems: 'center'}}>
          <Text numberOfLines={3} style={{fontSize: fontsize.CONTENT}}>
            {noti[index].content}
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
            <Text>{noti[index].time}</Text>
          </View>

          <TouchableOpacity onPress={() => {
            navigation.navigate('ScholNotiDetailScreen', {item: noti[index]});
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
        data={noti}
        keyExtractor={(item, index) => 'data-' + item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
