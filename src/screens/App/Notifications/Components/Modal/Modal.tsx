import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

const ChangeModal = ({
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
        isVisible={show}
        backdropOpacity={.9}
        style={styles.ModalContainer}
        onBackButtonPress={() => setShow(false)}
        onBackdropPress={() => setShow(false)}
      >
        <View style={styles.Container}>
          <View style={styles.Card}>
            <Svg name='milestone' width={45} height={40} />
            <View style={styles.TextContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={styles.Head1}>Milestone 1</Text>
                <Text style={styles.Text}>$250</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                <Text style={styles.Head2}>Backend Development</Text>
                <Text style={styles.DelText}>$250</Text>
              </View>
            </View>
          </View>

          <Text style={styles.Title}>Reason:</Text>
          <Text style={styles.Discription}>Give feedback, ask questions, or start a discussion in the comments. Give feedback, ask questions, or start a discussion in the comments. Give feedback, ask questions, or start a discussion in the comments.</Text>

          <Text style={styles.Text3}>Denying will start a dispute with the buyer</Text>

          <View style={[styles.RowBetween, { marginTop: 20 }]}>
            <TouchableOpacity onPress={() => {
              // setShow2(true)
              setShow(false)
            }} activeOpacity={.8} style={[styles.Button, { marginRight: 25, backgroundColor: COLORS.primary }]}>
              <Text style={styles.InvitationsText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} activeOpacity={.8} style={[styles.Button, { backgroundColor: COLORS.LRed }]}>
              <Text style={styles.InvitationsText}>Reject</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.DisputeButton}>
            <Text style={styles.DisputeText}>Dispute</Text>
          </TouchableOpacity>
        </View>

      </Modal>

      <Modal
        backdropOpacity={.9}
        isVisible={show2}
      >
        <View style={styles.container}>
          <Svg name='done' style={styles.Icon} />
          <Text style={styles.Title2}>Milestone Completed</Text>
          <Text style={styles.description}>Thank you for accepting Milestone completion payment to seller will be processed</Text>
          <TouchableOpacity onPress={() => {
            setShow2(false)
          }} activeOpacity={.8} style={styles.button}>
            <Text style={styles.buttonTitle}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>

  );
};

export default ChangeModal;
