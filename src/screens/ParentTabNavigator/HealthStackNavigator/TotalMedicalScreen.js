import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';

import FirestoreService from '../../../services/FirestoreService';

export default function TotalMedicalScreen() {
    const [loading, setLoading] = React.useState(true);
  const [datas, setDatas] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  React.useEffect(() => {
    FirestoreService.getMedicalofStudent('7mUNeNPpnRbxnAizSY8F')
      .then((result) => {
        console.log('Datas: ', result);
        setDatas(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);


    return (
        <SafeAreaView style={{flex: 1, marginTop: 50}}>
            <Text>Hello</Text>
        </SafeAreaView>
    )
}
