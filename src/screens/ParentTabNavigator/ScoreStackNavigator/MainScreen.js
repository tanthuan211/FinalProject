import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Container from '../../../components/Container';
import color from '../../../constants/color';
import FirestoreService from '../../../services/FirestoreService';

const data = [
  {
    id: 0,
    subject: 'Toán',
    mieng: [
      {id: 0, diem1: '10'},
      {id: 1, diem2: '8'},
    ],
    muoilam: [
      {id: 0, diem1: '7'},
      {id: 1, diem2: '9'},
    ],
    mottiet: '10',
    hk1: '9',
    hk2: '7',
    tb: '8.6',
  },
  {
    id: 1,
    subject: 'Văn',
    mieng: [
      {id: 0, diem1: '9'},
      {id: 1, diem2: '7'},
    ],
    muoilam: [
      {id: 0, diem1: '8'},
      {id: 1, diem2: '5'},
    ],
    mottiet: '7',
    hk1: '9',
    hk2: '8',
    tb: '7.8',
  },
  {
    id: 2,
    subject: 'Hoá',
    mieng: [
      {id: 0, diem1: '7'},
      {id: 1, diem2: '8'},
    ],
    muoilam: [
      {id: 0, diem1: '9'},
      {id: 1, diem2: '10'},
    ],
    mottiet: '9',
    hk1: '9',
    hk2: '10',
    tb: '8.8',
  },
  {
    id: 3,
    subject: 'Sinh',
    mieng: [
      {id: 0, diem1: '9'},
      {id: 1, diem2: '9'},
    ],
    muoilam: [
      {id: 0, diem1: '10'},
      {id: 1, diem2: '10'},
    ],
    mottiet: '9',
    hk1: '10',
    hk2: '9',
    tb: '9.7',
  },
  {
    id: 4,
    subject: 'Lý',
    mieng: [
      {id: 0, diem1: '6'},
      {id: 1, diem2: '7'},
    ],
    muoilam: [
      {id: 0, diem1: '8'},
      {id: 1, diem2: '9'},
    ],
    mottiet: '7',
    hk1: '10',
    hk2: '8',
    tb: '8.0',
  },
  {
    id: 5,
    subject: 'Sử',
    mieng: [
      {id: 0, diem1: '9'},
      {id: 1, diem2: '7'},
    ],
    muoilam: [
      {id: 0, diem1: '8'},
      {id: 1, diem2: '5'},
    ],
    mottiet: '7',
    hk1: '9',
    hk2: '8',
    tb: '7.8',
  },
  {
    id: 6,
    subject: 'Địa',
    mieng: [
      {id: 0, diem1: '10'},
      {id: 1, diem2: '5'},
    ],
    muoilam: [
      {id: 0, diem1: '5'},
      {id: 1, diem2: '9'},
    ],
    mottiet: '8',
    hk1: '6',
    hk2: '7',
    tb: '7.2',
  },
  {
    id: 7,
    subject: 'Thể Dục',
    mieng: [
      {id: 0, diem1: '7'},
      {id: 1, diem2: '7'},
    ],
    muoilam: [
      {id: 0, diem1: '7'},
      {id: 1, diem2: '9'},
    ],
    mottiet: '7',
    hk1: '10',
    hk2: '6',
    tb: '7.9',
  },
];

export default function NotificationScreen() {
  const [loading, setLoading] = React.useState(true);
  const [diems, setDiems] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FirestoreService.getDiemofStudent('7mUNeNPpnRbxnAizSY8F')
      .then((result) => {
        console.log('Diems: ', result);
        setDiems(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={styles.container}>
        <View
          style={styles.mon}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>
              {item.subject}
            </Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text>
              {item.mieng.map((m) => {
                return (
                  <View key={m.id} style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16}}>{m.diem1}</Text>
                    <View style={{width: 5}} />
                    <Text style={{fontSize: 16}}>{m.diem2}</Text>
                  </View>
                );
              })}
            </Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text>
              {item.muoilam.map((s) => {
                return (
                  <View
                    key={s.id}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 16}}>{s.diem1}</Text>
                    <View style={{width: 5}} />
                    <Text style={{fontSize: 16}}>{s.diem2}</Text>
                  </View>
                );
              })}
            </Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16}}>{item.mottiet}</Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16}}>{item.hk1}</Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16}}>{item.hk2}</Text>
          </View>
        </View>
        <View
          style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text
              style={{fontSize: 16, fontWeight: '700', color: color.PRIMARY}}>
              {item.tb}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container showAppbar title="Điểm số" subTitle="Huỳnh Thị Phương Linh">
      <View style={styles.container}>
        <View style={styles.mon}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>MÔN</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Miệng</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>15p</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>1 Tiết</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>HK1</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>HK2</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>TB</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'data-' + item.id}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: color.BACKGROUND_PRIMARY,
  },
  mon: {
    flex: 1.75,
    backgroundColor: color.WHITE,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent:'center'
  },
  col: {
    flex: 1,
    backgroundColor: color.WHITE,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent:'center'
  },
});
