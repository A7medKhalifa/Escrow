import { Text, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import { h } from 'values/Dimensions';


const SuccessModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const { navigate } = useNavigation<any>()
  const [ind, setInd] = useState<any>(0)
  const data = [
    {
      title: 'Awaiting for buyer approval',
      description: 'You will receive a notification email',
      component: (
        <View style={styles.ClockContainer}>
          <Svg name='Clock' height={45} width={45} style={{}} />
        </View>
      )
    },
    {
      title: 'Congratulations buyer approved your milestone completion',
      description: 'Wait for bank verification',
      component: (
        <View style={styles.ClockContainer}>
          <Svg name='Clock' height={45} width={45} style={{}} />
        </View>
      )
    },
    {
      title: 'Congratulations bank approved your payment completion',
      description: 'Money is being transferred to your account',
      component: (
        <Svg name='done' style={{ alignSelf: 'center', marginBottom: -h * .05, zIndex: 1 }} />
      )
    },
  ]
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => setShow(!show)}
      onBackdropPress={() => setShow(!show)}
    >
      {data[ind].component}
      <View style={styles.container}>
        <Text style={styles.AddText}>{data[ind].title}</Text>
        <Text style={styles.Discription}>{data[ind].description}</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
          ind < 2 ? setInd(ind + 1) : (
            setInd(0),
            setShow(!show),
            navigate('Dashboard')
            )
          // navigate('Dashboard')
        }}>
          <Text style={{ color: COLORS.white, fontWeight: '600' }}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>

  );
};

export default SuccessModal;
