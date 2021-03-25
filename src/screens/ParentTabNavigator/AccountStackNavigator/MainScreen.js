import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import Feather from 'react-native-vector-icons/Feather';

import Container from '../../../components/Container';
import FirestoreService from '../../../services/FirestoreService';
import color from '../../../constants/color';
import {useNavigation} from '@react-navigation/core';

const data = [
  {
    id: 0,
    iconName: 'lock',
    content: 'Đổi mật khẩu',
    iconColor: 'gray',
  },
  {
    id: 1,
    iconName: 'phone',
    content: 'Đổi số điện thoại liên lạc',
    iconColor: 'gray',
  },
  {
    id: 2,
    iconName: 'help-circle',
    content: 'Trợ giúp',
    iconColor: 'gray',
  },
  {
    id: 3,
    iconName: 'message-square',
    content: 'Phản hồi',
    iconColor: 'gray',
  },
  {
    id: 4,
    iconName: 'smile',
    content: 'Danh sách con cái',
    iconColor: 'gray',
  },
  {
    id: 5,
    iconName: 'log-out',
    content: 'Đăng xuất',
    iconColor: 'red',
  },
];

export default function NotificationScreen() {
  const [loading, setLoading] = React.useState(true);
  const [parents, setParents] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  const navigation = useNavigation();

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

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.accessibilityContainer}>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          {/* /// ICON /// */}
          <View style={{width: 50, justifyContent: 'center'}}>
            <Feather name={item.iconName} size={28} color={item.iconColor} />
          </View>
          {/* /// CONTENT /// */}
          <View style={{flex: 3, justifyContent: 'center'}}>
            <Text style={{fontSize: 18}}>{item.content}</Text>
          </View>
          {/* /// RIGHT BUTTON /// */}
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <Feather name="chevron-right" size={28} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container showAppbar title="Tài khoản" subTitle="Phạm Phương Dung (mẹ)">
      {/* <Text>TAI KHOAN</Text>
      <Button title="Log out" onPress={() => {
                auth()
                    .signOut()
                    .then(() => console.log('Log out'));
            }} /> */}

      {parents.map((p) => {
        return (
          <View style={{flex: 1, backgroundColor: color.WHITE}}>
            <View style={styles.profileContainer}>
              <View style={styles.profileSubContainer}>
                {/* /// AVATAR /// */}
                <View style={{height: 90}}>
                  <Image
                    source={{uri: p.avatarUrl}}
                    style={{height: 90, width: 90, borderRadius: 45}}
                  />
                </View>

                {/* /// NAME & RELA */}
                <View style={{flex: 3, paddingLeft: 10}}>
                  <Text style={{fontSize: 16}}>Phụ huynh ({p.rela})</Text>
                  <View style={{height: 5}} />
                  <Text style={{fontSize: 16, color: color.PRIMARY}}>
                    {p.name}
                  </Text>
                </View>

                {/* /// RIGHT BUTTON /// */}
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Profile');
                    }}>
                    <Feather name="chevron-right" size={28} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* /// THIET LAP /// */}
            <View style={styles.thietlap}>
              <Text
                style={{fontSize: 18, fontWeight: '700', color: color.PRIMARY}}>
                Thiết lập
              </Text>
            </View>

            {/* /// FLATLST  /// */}
            <View style={{flex: 2}}>
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

const styles = StyleSheet.create({
  accessibilityContainer: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
  },

  profileContainer: {
    justifyContent: 'center',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  profileSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  thietlap: {
    height: 50,
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
