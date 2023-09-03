import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

const RejectModal = ({
  show,
  show2,
  setShow,
  setShow2,
}: {
  show: boolean;
  show2: boolean;
  setShow: any;
  setShow2: any;
}) => {
  const { navigate } = useNavigation<any>()
  return (
    <>
      <Modal
        isVisible={true}
        backdropOpacity={.9}
        style={styles.ModalContainer}
        onBackButtonPress={() => setShow(false)}
        onBackdropPress={() => setShow(false)}
      >
        <View style={styles.Container}>
          <View style={styles.Card}>
            <Text style={styles.AddText}>Milestones Payment rejected</Text>
            <Text style={styles.Discription}>Email notification</Text>

            <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
              navigate('Expenditures')
              setShow(!show)
            }}>
              <Text style={{ color: COLORS.blue, fontWeight: '600' }}>Send invitation</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
    </>

  );
};

export default RejectModal;
