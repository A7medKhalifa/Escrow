import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import COLORS from 'values/colors';

const NotificationModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: any;
}) => {
  const { navigate } = useNavigation<any>()
  return (
    <Modal
      animationIn='bounceInRight'
      animationOut='bounceOutRight'
      isVisible={show}
      backdropOpacity={.9}
      style={styles.ModalContainer}
      onBackButtonPress={() => setShow(false)}
      onBackdropPress={() => setShow(false)}
    >
      <View style={styles.Container}>

        <TouchableOpacity activeOpacity={.8} onPress={() => {
          setShow(false)
          navigate('Notifications')
        }} style={styles.row}>
          <View>
            <Svg name='bell' />
            <View style={styles.NumCircle}>
              <Text style={styles.Num}>3</Text>
            </View>
          </View>
          <Text style={styles.title}>Notification</Text>
        </TouchableOpacity>

        <View style={styles.Divider} />

        <View style={styles.row}>
          <Svg name='home' />
          <Text style={styles.title}>Home</Text>
        </View>
        
        <View style={styles.Divider} />

        <TouchableOpacity onPress={() => {
          setShow(false)
          navigate('auth')

        }} style={styles.row}>
          <Svg name='LogOut' />
          <Text style={styles.title}>Log out</Text>
        </TouchableOpacity>

      </View>

    </Modal>
  );
};

export default NotificationModal;
