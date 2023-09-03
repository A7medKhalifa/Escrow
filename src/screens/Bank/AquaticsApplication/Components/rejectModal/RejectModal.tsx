import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';


const RejectModal = ({
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
      <View style={styles.container}>
        <Text style={styles.AddText}>Please enter the reason for rejection</Text>

        <Formik
          initialValues={{ Reason: '' }}
          validationSchema={
            Yup.object().shape({ Reason: Yup.string().required('Reason is required') })
          }
          onSubmit={() => navigate('RegistrationAccepted')}>
          {props => (
            <InputView
              {...props}
              name="Reason"
              values={props.values}
              placeholder="Reason"
              keyboardType="numeric"
              containerStyling={{ marginBottom: -30, marginTop: 30 }}
            />
          )}
        </Formik>

        <TouchableOpacity activeOpacity={.8} style={styles.ok} onPress={() => {
          navigate('Dashboard')
          setShow(!show)
        }}>
          <Text style={{ color: COLORS.white, fontWeight: '600' }}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </Modal>

  );
};

export default RejectModal;
