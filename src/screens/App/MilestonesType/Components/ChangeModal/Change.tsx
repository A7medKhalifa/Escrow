import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import { ChangeMilestones_initial_values } from 'src/formik/initial_values';
import { changeMilestonesPasswordScheme } from 'src/formik/schema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputView from 'components/molecules/Input';
import CalendarInput from 'components/molecules/Calender';
import Button from 'components/molecules/shortbutton';
import DoneChangeModal from '../DoneModal/DoneChange';

const ChangeModal = ({
  show,
  setShow
}: {
  show: boolean
  setShow: any
}) => {
  const [day, setDay] = useState<any>()
  const [showCalender, setShowCalender] = useState<any>(false)
  const [DoneShow, setDoneShow] = useState<any>(false)

  return (
    <Modal
      backdropOpacity={.8}
      isVisible={show}
      onBackdropPress={() => setShow(!show)}
      onBackButtonPress={() => setShow(!show)}
    >
      <DoneChangeModal setShow={setDoneShow} show={DoneShow} />
      <View style={styles.container}>
        <Text style={styles.Title}>Change in Milestones :</Text>
        <Formik
          initialValues={ChangeMilestones_initial_values}
          validationSchema={changeMilestonesPasswordScheme}
          onSubmit={() => {
            setShow(false)
            // setDoneShow(true)
          }}>
          {props => (
            <KeyboardAwareScrollView style={styles.KeyboardAwareScrollView}>
              <View style={styles.MainView}>
                <InputView
                  {...props}
                  placeholder="Value"
                  values={props.values}
                  name="Value"
                  keyboardType='decimal-pad'
                />
                <InputView
                  {...props}
                  placeholder="Description"
                  values={props.values}
                  name="Description"
                />
                <CalendarInput
                  {...props}
                  name='Start Date'
                  CalenderShow={showCalender}
                  setCalenderShow={setShowCalender}
                />

                <Button
                  style={styles.button}
                  type="primary"
                  label="Submit Change"
                  onPress={() => {
                    props.handleSubmit();
                  }}
                />
              </View>
            </KeyboardAwareScrollView>
          )}
        </Formik>

      </View>
    </Modal>
  );
};

export default ChangeModal;
