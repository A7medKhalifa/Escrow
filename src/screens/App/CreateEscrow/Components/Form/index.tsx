import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import { createEscrow_initial_values, } from 'src/formik/initial_values';
import { createEscrowScheme } from 'src/formik/schema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/shortbutton';
import { h, w } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/core';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import AddMilestonesModal from '../AddMilestonesModal/AddMilestonesModal';
import CalendarInput from 'components/molecules/Calender';
import CreatedModal from '../CreatedModal/CreatedModal';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/user/thunks';
import UploadDocument from 'components/molecules/UploadDocument';
import { CheckEqualsInValues } from 'src/HF/HF';
import EditMilestonesModal from '../EditMilestones/EditMilestonesModal';
import Toast from 'react-native-toast-message';
import { useLoadingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { selectCreated } from 'redux/user';

const FormSection = ({

}: {

    }) => {
    const { navigate } = useNavigation<any>();
    const dispatch = useAppDispatch();
    const loading = useLoadingSelector(thunks.createEscrow)
    const Created = useSelector(selectCreated)
    const [accepted, setAccepted] = useState(false)
    const [index, setIndex] = useState<number>()
    const [acceptedD, setAcceptedD] = useState(false)
    const [show, setShow] = useState<any>(false)
    const [showEdit, setShowEdit] = useState<any>(false)
    const [show2, setShow2] = useState<any>(false)
    const [MileStones, setMileStones] = useState<any[]>([])
    const [showCalender, setShowCalender] = useState<any>(false)

    useEffect(() => {
        Created && setShow2(true)
    }, [Created])

    return (
        <Formik
            initialValues={createEscrow_initial_values}
            validationSchema={createEscrowScheme}
            onSubmit={(data: any) => {
                if (acceptedD == false && accepted == false) {
                    Toast.show({
                        type: "error",
                        text1: 'You must accept declaration and terms',
                    })
                } else if (CheckEqualsInValues(MileStones, parseInt(data.EscrowValue))) {
                    const formdata: any = new FormData();
                    formdata.append('name', data.EscrowName)
                    formdata.append('description', data.Description)
                    formdata.append('value', data.EscrowValue)
                    formdata.append('currency', 'USD')
                    formdata.append('start_date', data.StartDate)
                    for (var i = 0; i < MileStones.length; i++) {
                        formdata.append(`milestones[${i}][name]`, MileStones[i]?.name)
                        formdata.append(`milestones[${i}][description]`, MileStones[i]?.description)
                        formdata.append(`milestones[${i}][value]`, MileStones[i]?.value)
                        formdata.append(`milestones[${i}][start_date]`, MileStones[i]?.start_date)
                        formdata.append(`milestones[${i}][completion_date]`, MileStones[i]?.completion_date)
                    }
                    formdata.append('document', data?.UploadDocument)
                    dispatch(thunks.createEscrow(formdata))
                    // console.log(JSON.stringify(data?.UploadDocument))
                } else if (MileStones.length == 0) {
                    Toast.show({
                        type: "error",
                        text1: 'You should add one or more milestones',
                    })
                }
                else {
                    Toast.show({
                        type: "error",
                        text1: 'Milestones total value should be equal Escrow value',
                    })
                }
            }}>
            {props => (
                <KeyboardAwareScrollView style={{ height: h }}>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <InputView
                            {...props}
                            placeholder="Escrow Name"
                            values={props.values}
                            name="EscrowName"
                        />
                        <InputView
                            {...props}
                            placeholder="Description"
                            values={props.values}
                            name="Description"
                        />
                        <InputView
                            {...props}
                            placeholder="Escrow Value"
                            values={props.values}
                            name="EscrowValue"
                            keyboardType="numeric"
                        />
                        <CalendarInput
                            {...props}
                            name="Start Date"
                            CalenderShow={showCalender}
                            setCalenderShow={setShowCalender}
                        />
                        <UploadDocument
                            {...props}
                            name="Upload Document"
                        />
                        <View style={styles.container}>
                            <Text style={styles.MilestonesText}>Milestones</Text>
                            <TouchableOpacity onPress={() => setShow(!show)} activeOpacity={.8} style={styles.AddTextContainer}>
                                <Svg bgColor='#7889FF' name='add' />
                                <Text style={styles.AddText}>Add milestones</Text>
                            </TouchableOpacity>
                        </View>

                        <AddMilestonesModal data={MileStones} show={show} setShow={setShow} />
                        <EditMilestonesModal setData={setMileStones} index={index} data={MileStones} show={showEdit} setShow={setShowEdit} />
                        <CreatedModal show={show2} setShow={setShow2} />
                        <FlatList
                            nestedScrollEnabled
                            data={MileStones}
                            renderItem={({ item, index }) => (
                                <>
                                    <View style={styles.ListContainer}>
                                        <Text style={styles.Title}>{item?.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text onPress={() => {
                                                setShowEdit(true)
                                                setIndex(index)
                                            }} style={{ color: COLORS.move, marginRight: 20 }}>Edit</Text>
                                            <Text onPress={() => {
                                                let items = MileStones
                                                items.splice(index, 1)
                                                setMileStones([...items])
                                            }} style={{ color: COLORS.move, }}>Delete</Text>
                                        </View>
                                    </View>
                                </>
                            )}
                        />
                        <View style={styles.CheckContainer}>
                            <TouchableOpacity activeOpacity={.8} onPress={() => { setAcceptedD(!acceptedD) }}>
                                <Svg name={acceptedD ? "fillCheckbox" : 'unfillCheckbox'} height={25} width={25} />
                            </TouchableOpacity>
                            <Text style={[styles.Text, { fontSize: 16, fontWeight: '500' }]}>Declaration</Text>
                        </View>
                        <Text style={[styles.Text, { marginLeft: 55, marginTop: -15, marginBottom: 10 }]}>I accept declaration.</Text>
                        <View style={styles.CheckContainer}>
                            <TouchableOpacity activeOpacity={.8} onPress={() => { setAccepted(!accepted) }}>
                                <Svg name={accepted ? "fillCheckbox" : 'unfillCheckbox'} height={25} width={25} />
                            </TouchableOpacity>
                            <Text style={styles.Text}>I accept the <Text style={styles.Terms} onPress={() => Linking.openURL('https://o-projects.org')}>
                                terms and conditions.</Text></Text>
                        </View>

                        <Button
                            isLoading={loading}
                            style={{ marginTop: h * 0.02, width: '90%', alignSelf: 'center' }}
                            type="primary"
                            label="Submit Escrow request"
                            onPress={() => {
                                props.handleSubmit();
                            }}
                        />
                    </View>
                </KeyboardAwareScrollView>
            )
            }
        </Formik >
    );
};

export default FormSection;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 20
    },
    AddTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    AddText: {
        color: COLORS.move,
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 5
    },
    MilestonesText: {
        color: COLORS.DDarkBlue,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
    },
    ListContainer: {
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 20,
        paddingBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    Title: {
        color: COLORS.gray,
    },
    CheckContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20,
        width: w * 0.8,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    Text: {
        fontWeight: '400',
        marginLeft: 10,
        fontSize: 13,
        color: COLORS.black
    },
    Terms: {
        color: COLORS.blue,
        textDecorationLine: 'underline'
    },
    fileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15
    },
    fileText: {
        color: COLORS.black,
        fontSize: 14,
        marginLeft: 5,
        fontWeight: '600',
        textDecorationLine: 'underline'
    }
});