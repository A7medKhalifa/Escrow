import { View, StatusBar, ScrollView, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import COLORS from 'values/colors';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import Header from './Components/Head/Header';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import ChangeModal from './Components/Modal/Modal';
import DoneModal from './Components/DoneModal/Done';
import RejectModal from './Components/RejectModal/Modal';

const NotificationsScreen = () => {
  const uri = 'data:image/jpeg;base64,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'
  const { navigate } = useNavigation<any>()
  const [show1, setShow1] = useState<any>(false)
  const [show2, setShow2] = useState<any>(false)

  return (
    <View
      style={{
        height: h * 1,
        justifyContent: 'flex-start',
        backgroundColor: COLORS.bgDWhite,
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <Header />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <FlatList
            data={[{ done: true }, { done: false }, { done: true }]}
            style={{ width: '100%' }}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity activeOpacity={.8} onPress={() =>
                  setShow1(true)
                } style={styles.Card}>
                  <Image style={styles.S_Image} source={{ uri: uri }} />
                  <View style={{ marginLeft: 10, width: '80%' }}>
                    <View style={styles.Row}>
                      <Text style={styles.WalletBalanceText}>O-Projects</Text>
                      <Text style={styles.DateText}>11:45 am</Text>
                    </View>
                    <Text style={styles.smallText2}>Escrow Completed</Text>
                    {item.done &&
                      <View style={styles.Row2}>
                        <Text style={styles.smallText2}>Milestone 1 completed</Text>
                        <Svg name='smallDone' style={{ marginTop: -2 }} />
                      </View>
                    }
                  </View>
                </TouchableOpacity>
              </>
            )}
          />

          <ChangeModal show={show1} show2={show2} setShow={setShow1} setShow2={setShow2} />
          {/* <RejectModal /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;