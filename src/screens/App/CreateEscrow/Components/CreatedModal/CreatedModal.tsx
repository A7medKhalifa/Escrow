import { Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import { h } from 'values/Dimensions';
import { useAppDispatch } from 'redux/store';
import User from 'redux/user';


const CreatedModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => {
        setShow(!show)
        navigate('Dashboard')
      }}
      onBackdropPress={() => {
        setShow(!show)
        navigate('Dashboard')
      }}
    >
      <Svg name='done' style={{ alignSelf: 'center', marginBottom: -h * .05, zIndex: 1 }} />
      <ScrollView style={styles.container}>
        <Text style={styles.AddText}>Escrow Created</Text>
        <Text style={styles.Discription}>Escrow will be under review and we will notify when accepted</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
          setShow(!show)
          dispatch(User.changeCreated(false))
          navigate('Dashboard')
        }}>
          <Text style={{ color: COLORS.blue, fontWeight: '600' }}>Ok</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>

  );
};

export default CreatedModal;
