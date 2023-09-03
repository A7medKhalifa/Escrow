import { Text, ScrollView } from 'react-native';
import React from 'react';
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
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => setShow(!show)}
      onBackdropPress={() => setShow(!show)}
    >
      <Svg name='done' style={{ alignSelf: 'center', marginBottom: -h * .05, zIndex: 1 }} />
      <ScrollView style={styles.container}>
        <Text style={styles.AddText}>You have successfully paid the deposit!</Text>
        <Text style={styles.Discription}>Wait for admins' notification of approval to start the work package</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
          navigate('Expenditures')
          setShow(!show)
        }}>
          <Text style={{ color: COLORS.blue, fontWeight: '600' }}>Got it</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>

  );
};

export default SuccessModal;
