import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const DeleteModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const { navigate } = useNavigation<any>()
  return (
    <Modal
      backdropOpacity={.8}
      isVisible={show}
      onBackdropPress={() => setShow(!show)}
      onBackButtonPress={() => setShow(!show)}
    >
      <View style={styles.container}>
        <Text style={styles.Title}>Are you sure?</Text>
        <Text style={styles.description}>Are you sure you want to delete this milestone?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { setShow(false) }} activeOpacity={.8} style={styles.buttonKeepIt}>
            <Text style={styles.buttonTitle}>Keep it</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Milestones')} activeOpacity={.8} style={styles.buttonDelete}>
            <Text style={styles.buttonTitle}>Delete</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

export default DeleteModal;
