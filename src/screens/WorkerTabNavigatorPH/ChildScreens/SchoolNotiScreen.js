import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

import color from '../../../constants/color';
import fontsize from '../../../constants/fontsize';
import {FlatList} from 'react-native-gesture-handler';
// import moment from 'moment';
// import 'moment/locale/vi';

export default function SchoolNotiScreen({navigation}) {
  const [noti, setNoti] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  // const [index, setIndex] = React.useState(0);
  const [id, setId] = React.useState(1);

  const getData = () => {
    const data = [];
    firestore()
      .collection('ThongBao')
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
          marginTop: 15,
          height: 130,
          backgroundColor: color.WHITE,
          borderColor: color.PRIMARY,
          borderWidth: 1,
          borderRadius: 8,
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
          <Text style={{color: color.TITLE, fontSize: fontsize.TITLE}}>
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
        // initialNumToRender={noti.id}
      />
    </SafeAreaView>
  );
}
