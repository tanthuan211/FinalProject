import React from 'react';
import {View, Text, Image, FlatList,TouchableOpacity} from 'react-native';

import FirestoreService from '../../../services/FirestoreService';
import Container from '../../../components/Container';
import color from '../../../constants/color';

const data = [
  {
    id: 0,
    title: 'Tên',
  },
  {
    id: 1,
    title: 'Ngày sinh',
  },
  {
    id: 2,
    title: 'Quan hệ với học sinh',
  },
  {
    id: 3,
    title: 'Địa chỉ',
  },
  {
    id: 4,
    title: 'SĐT',
  },
  {
    id: 5,
    title: 'Email',
  },
];

export default function Profile({navigation, route}) {
  const [loading, setLoading] = React.useState(true);
  const [parents, setParents] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FirestoreService.getParentofStudent('7mUNeNPpnRbxnAizSY8F')
      .then((result) => {
        console.log('Parents: ', result);
        setParents(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({item}) => {
    return (
      <View>
        {parents.map((p) => {
          return (
            <View
              style={{
                marginTop: 30,
                height: 30,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,

              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: '700', fontSize: 18}}>{item.title}</Text>
                {item.id == 0 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.name}
                </Text>}
                {item.id == 1 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.birthday}
                </Text>}
                {item.id == 2 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.rela}
                </Text>}
                {item.id == 3 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.address}
                </Text>}
                {item.id == 4 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.phone}
                </Text>}
                {item.id == 5 && <Text style={{color: color.PRIMARY, fontSize: 18}}>
                  {p.email}
                </Text>}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Container showAppbar showBackButton>
      {parents.map((p) => {
        return (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, marginTop: 20, marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: p.avatarUrl}}
                style={{height: 100, width: 100, borderRadius: 50}}
              />
              <TouchableOpacity>
              <Text style={{color: color.LINK}}>Đổi avatar</Text>
              </TouchableOpacity>
              
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => 'data-' + item.id}
            />
          </View>
          </View>
          
        );
      })}
    </Container>
  );
}
