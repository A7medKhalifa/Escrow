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
      // onBackButtonPress={() => setShow(!show)}
      // onBackdropPress={() => setShow(!show)}
    >
      <Svg name='done' style={{ alignSelf: 'center', marginBottom: -h * .05, zIndex: 1 }} />
      <ScrollView style={styles.container}>
        <Text style={styles.AddText}>Acceptance Sent</Text>
        <Text style={styles.Discription}>You will Notified once buyer paid deposit fund</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
          navigate('Dashboard')
          setShow(!show)
        }}>
          <Text style={{ color: COLORS.white, fontWeight: '600' }}>Ok</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>

  );
};

export default SuccessModal;
