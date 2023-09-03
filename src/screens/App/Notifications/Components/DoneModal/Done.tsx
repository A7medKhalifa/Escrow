import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const DoneModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const { navigate } = useNavigation<any>()
  return (
    <Modal
      backdropOpacity={.9}
      isVisible={show}
    >
      <View style={styles.container}>
        <Svg name='done' style={styles.Icon} />
        <Text style={styles.Title}>Milestone Completed</Text>
        <Text style={styles.description}>Thank you for accepting Milestone completion payment to seller will be processed</Text>
        <TouchableOpacity onPress={() => {
          setShow(false)
        }} activeOpacity={.8} style={styles.button}>
          <Text style={styles.buttonTitle}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DoneModal;
