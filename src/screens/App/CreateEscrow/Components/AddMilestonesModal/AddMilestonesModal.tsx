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
import DropDownPicker from 'react-native-dropdown-picker';
import useLibraryPermission from 'hooks/useLibraryPermission';

const AddMilestonesModal = ({
  show,
  setShow,
  data
}: {
  show: boolean
  setShow: any
  data: any[]
}) => {
  const [startDateShow, setStartDateShow] = useState<any>(false)
  const [CompletionDateShow, setCompletionDateShow] = useState<any>(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>('USD');
  const { uploadFile } = useLibraryPermission()

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
            initialValues={addMilistones_initial_values}
            validationSchema={AddMilestonesScheme}
            onSubmit={(values) => {
              data.push({
                name: values.MilestoneName,
                description: values.MilestoneDescription,
                value: values.MilestoneValue,
                start_date: values.StartDate,
                completion_date: values.CompletionDate
              })
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
                {/* {
                open && <View style={styles.Modal}>
                  <FlatList
                    data={[{ currancy: 'USD' }, { currancy: 'EGP' }]}
                    renderItem={({ item }) => (
                      <Text onPress={() => {
                        setOpen(false)
                        setValue(item.currancy)
                      }} style={{ marginVertical: 5, color: '#000' }}>{item.currancy}</Text>
                    )}
                  />
                </View>
              } */}


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

                {/* <Text style={styles.Head}>Conditions to release payments</Text>
                <Text style={styles.Discription}>For payment to be released, your seller has to provide the following document as proof for verification.</Text>

                <TouchableOpacity style={styles.fileButton}>
                  <Svg name='file' bgColor={COLORS.move} height={18} width={18} />
                  <Text style={styles.fileText}>Upload the bill of lading/ Airway Bill.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fileButton}>
                  <Svg name='file' bgColor={COLORS.move} height={18} width={18} />
                  <Text style={styles.fileText}>Commercial invoice.</Text>
                </TouchableOpacity>*/}

                {/* <TouchableOpacity onPress={() => { uploadFile() }} style={styles.fileButton}>
                  <Svg name='file' bgColor={COLORS.move} height={18} width={18} />
                  <Text style={styles.fileText}>Other.</Text>
                </TouchableOpacity> */}
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

export default AddMilestonesModal;
