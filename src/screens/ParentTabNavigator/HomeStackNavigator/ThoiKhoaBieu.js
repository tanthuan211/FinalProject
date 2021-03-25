import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import FirestoreService from '../../../services/FirestoreService';
import Container from '../../../components/Container';
import color from '../../../constants/color';

const dayOfWeeks = [
  {
    id: 0,
    text: '2',
    morning:[
      {id: 0, mon1: 'Toán', time1:'7:00 - 7:45'},
      {id: 1, mon2: 'Văn', time2:'8:00 - 8:45'}
    ]
  },
  {
    id: 1,
    text: '3',
  },
  {
    id: 2,
    text: '4',
  },
  {
    id: 3,
    text: '5',
  },
  {
    id: 4,
    text: '6',
  },
  {
    id: 5,
    text: '7',
  },
  {
    id: 6,
    text: 'CN',
  },
];

export default function ThoiKhoaBieu() {
  const [loading, setLoading] = React.useState(true);
  const [schedules, setSchedules] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FirestoreService.getTKBofClass('jOkdBAfy0hGT4t6jUvIK', '2020-2021')
      .then((result) => {
        console.log('Schedules: ', result);
        setSchedules(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        {schedules.map((s) => {
          return (
            <View
              style={{
                marginTop: 8,
                flex: 1,
                flexDirection: 'row',
                backgroundColor: color.WHITE,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  borderColor: '#e8e8e8',
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color.PRIMARY,
                  }}>
                  <Text style={{fontWeight: '700', color: color.WHITE}}>
                    {item.text}
                  </Text>
                </View>
              </View>
              <View style={{flex: 4.5}}>
                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderColor: '#e8e8e8',
                    justifyContent: 'center',
                  }}>
                  <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: '700'}}>Sáng</Text>
                   {item.id == 0 && <View style={{marginLeft: 20, flexDirection:'row', justifyContent:'center'}}>
                    <Icon name="chevron-right" type="material-community" size={16} color={color.PRIMARY_ICON} />
                    <Text>{item.morning.map((z) => {
                      return(
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                          <Text>{z.time1}</Text>
                          <View style={{width: 10}} />
                          <Text>{z.mon1}</Text>
                        </View>
                      )
                    })}</Text>
                    </View>}
                    
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderColor: '#e8e8e8',
                    justifyContent: 'center',
                  }}>
                  <View style={{marginLeft: 5}}>
                    <Text style={{fontWeight: '700'}}>Chiều</Text>
                  </View>
                </View>
                {item.text !== 'CN' && (
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={{marginLeft: 5}}>
                      <Text style={{fontWeight: '700'}}>Tối</Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Container
      showAppbar
      showBackButton
      title="THỜI KHOÁ BIỂU"
      subTitle="Lớp 10/2">
      <View style={{flex: 1, marginTop: -8}}>
        <FlatList
          data={dayOfWeeks}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'schedule-' + item.id}
        />
        {/* {schedules.map((p) => {
          return(
            <View>
              <Text>{p.monday.morning.session.map((v) => {
                return(
                  <View style={{flexDirection: 'row'}}>
                    <Text>{v.fromTime} -</Text>
                    <Text>{v.toTime}</Text> 
                    <Text>{v.subject}</Text>
                  </View>
                )
              })}</Text>
            </View>
          )
        })} */}
      </View>
    </Container>
  );
}

// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { useTheme } from 'react-native-paper';
// import { Icon } from 'react-native-elements';
// import FirestoreService from '../../../services/FirestoreService';
// import Container from '../../../components/Container';
// import color from '../../../constants/color';
// import { RefreshControl } from 'react-native';

// const styles = StyleSheet.create({
//   dayOfWeek: {
//     fontFamily: 'Arial',
//     fontSize: 18,
//     color: 'black',
//   },

//   sessionOfDay: {
//     margin: 8,
//     fontFamily: 'Arial',
//     fontSize: 15,
//     color: 'black',
//   },
// });

// const dayOfWeeks = [
//   {
//     id: 'monday',
//     text: '2',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'tuesday',
//     text: '3',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'wednesday',
//     text: '4',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'thursday',
//     text: '5',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'friday',
//     text: '6',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'saturday',
//     text: '7',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//       { id: 'evening', text: 'Tối' },
//     ],
//     color: color.WHITE,
//   },
//   {
//     id: 'sunday',
//     text: 'CN',
//     sessions: [
//       { id: 'morning', text: 'Sáng' },
//       { id: 'afternoon', text: 'Chiều' },
//     ],
//     color: color.WHITE,
//   },
// ];

// export default function ScheduleScreen() {
//   const [loading, setLoading] = React.useState(true);
//   const [schedules, setSchedules] = React.useState([]);
//   const [refresh, setRefresh] = React.useState(0);

//   const { colors: themeColors } = useTheme();

//   React.useEffect(() => {
//     FirestoreService.getTKBofClass('jOkdBAfy0hGT4t6jUvIK', '2020-2021')
//       .then((result) => {
//         console.log('Schedules: ', result);
//         setSchedules(result);
//         setLoading(false);
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   }, [refresh]);

//   const renderItem = ({ item }) => {
//     return (
//       <View>
//         {dayOfWeeks.map((dw) => {
//           return (
//             //  DAYS OF WEEK
//             <View key={dw.id} style={{ flex: 1, flexDirection: 'row', marginBottom: 6, backgroundColor: color.WHITE }}>
//               <View
//                 style={{
//                   padding: 10,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderWidth: 1,
//                   borderColor: color.PRIMARY_BORDER,
//                   borderLeftWidth: 0,
//                 }}>
//                 <View
//                   style={{
//                     backgroundColor: color.PRIMARY,
//                     height: 44,
//                     width: 44,
//                     borderRadius: 24,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Text style={[styles.dayOfWeek, { color: dw.color }]}>{dw.text}</Text>
//                 </View>
//               </View>
//               {/* SESSIONS OF DAY */}
//               <View style={{ flex: 1 }}>
//                 {dw.sessions.map((sod) => {
//                   return (
//                     <View
//                       key={sod.id}
//                       style={{
//                         borderWidth: 0,
//                         borderTopWidth: sod.id !== 'evening' ? 1 : 0,
//                         borderBottomWidth: sod.id !== 'morning' ? 1 : 0,
//                         borderColor: color.PRIMARY_BORDER,
//                       }}>
//                       <Text style={styles.sessionOfDay}>{sod.text}</Text>
                      
//                         {dw.id === 'monday' && <Text>
//                           {schedules.map((s, index) => {
//                           return (
//                             <View key={'session-' + index} style={{ flexDirection: 'row', marginLeft: 16, marginBottom: 3 }}>
//                                <Icon name="chevron-right" type="material-community" size={16} color={color.PRIMARY_ICON} />
//                               <Text style={{ marginLeft: 2, color: 'black', fontFamily: 'Arial' }}>
//                                 {s.monday.morning.session.map((v) => {
//                                   return(
//                                     <View>
//                                       <Text>{v.fromTime}</Text>
//                                       <Text>{v.toTime}</Text>
//                                     </View>
//                                   )
//                                 })} 
//                               </Text>
//                               <Text style={{ marginLeft: 6, color: 'black', fontFamily: 'Arial' }}>{s.subject}</Text>
//                             </View>
//                           );
                          
//                         })}
//                         </Text>}
                        
//                     </View>
//                   );
//                 })}
//               </View>
//             </View>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <Container showAppbar showBackButton title="THỜI KHÓA BIỂU" subTitle="Lớp 10/2" ready={!loading}>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={schedules}
//         keyExtractor={(item, index) => 'schedule-' + index}
//         renderItem={renderItem}
//         refreshControl={
//           <RefreshControl
//             refreshing={loading}
//             onRefresh={() => {
//               setRefresh(refresh + 1);
//             }}
//           />
//         }
//       />
//     </Container>
//   );
// }
