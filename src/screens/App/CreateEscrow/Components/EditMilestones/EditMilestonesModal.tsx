import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import { addMilistones_initial_values } from 'src/formik/initial_values';
import { AddMilestonesScheme } from 'src/formik/schema';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/shortbutton';
import { h } from 'values/Dimensions';
import CalendarInput from 'components/molecules/Calender';
import Svg from 'atoms/Svg';
import COLORS from 'values/colors';


const EditMilestonesModal = ({
  show,
  setShow,
  data,
  index,
  setData
}: {
  show: boolean
  index: any
  setShow: any
  data: any[]
  setData: any
}) => {
  const [startDateShow, setStartDateShow] = useState<any>(false)
  const [CompletionDateShow, setCompletionDateShow] = useState<any>(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>('USD');
  const item = data[index]
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={() => setShow(!show)}
      onBackdropPress={() => setShow(!show)}
    >
      <View style={styles.container}>
        <Text style={styles.AddText}>Add Milestone</Text>
        <ScrollView style={{ height: '52%' }} showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              MilestoneName: item?.name,
              MilestoneDescription: item?.description,
              MilestoneValue: item?.value,
              StartDate: item?.start_date,
              CompletionDate: item?.completion_date
            }}
            validationSchema={AddMilestonesScheme}
            onSubmit={(values) => {
              data?.splice(index, 0, {
                name: values.MilestoneName,
                description: values.MilestoneDescription,
                value: values.MilestoneValue,
                start_date: values.StartDate,
                completion_date: values.CompletionDate
              })
              let items = data
              items.splice(index + 1, 1)
              setData([...items])
              setShow(!show)
            }}>
            {props => (
              <>
                <InputView
                  {...props}
                  placeholder="Milestone Name"
                  values={props.values}
                  name="MilestoneName"
                />
                <InputView
                  {...props}
                  placeholder="Milestone Description"
                  values={props.values}
                  name="MilestoneDescription"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <InputView
                    {...props}
                    placeholder="Milestone Value"
                    values={props.values}
                    name="MilestoneValue"
                    containerStyling={{ width: '72%', }}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity activeOpacity={.8} onPress={() => { setOpen(!open) }} style={styles.CurrancyContainer}>
                    <Text style={styles.CurrancyText}>{value}</Text>
                    <Svg name='arrowD' bgColor={COLORS.primary} height={30} />
                  </TouchableOpacity>
                </View>


                <CalendarInput
                  {...props}
                  name='Start Date'
                  CalenderShow={startDateShow}
                  setCalenderShow={setStartDateShow}
                />
                <CalendarInput
                  {...props}
                  name='Completion Date'
                  CalenderShow={CompletionDateShow}
                  setCalenderShow={setCompletionDateShow}
                />

                <Button
                  style={{ marginTop: h * 0.025 }}
                  type="primary"
                  label="Add milestone"
                  onPress={() => {
                    props.handleSubmit()
                  }}
                />
              </>
            )}
          </Formik>
        </ScrollView>

      </View>
    </Modal>

  );
};

export default EditMilestonesModal;
