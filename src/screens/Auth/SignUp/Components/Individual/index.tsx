import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import InputView from 'components/molecules/Input';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import useLibraryPermission from 'hooks/useLibraryPermission';
import { DropDown } from 'components/molecules/DropDown';
import { Cities, Countries, Nationalities } from './DummyData';
import { individualRegister_initial_values } from 'src/formik/initial_values';
import { individualRegisterScheme } from 'src/formik/schema';
import { UploadID } from 'components/molecules/UploadID';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/auth/thunks';
import { useLoadingSelector } from 'redux/selectors';
import { selectIndividualSignup } from 'redux/auth';
import { useSelector } from 'react-redux';
import MobileInputView from 'components/molecules/MobileInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { h } from 'values/Dimensions';

const Individual = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const loading = useLoadingSelector(thunks.doIndividualSignUp)
  const doneIndividualSignup = useSelector(selectIndividualSignup)
  const [selectorsShow, updateShowSelectors] = useState({
    Country: false,
    City: false,
    Nationality: false,
  });
  const [disabled, setDisabled] = useState<any>({
    Country: false,
    City: true,
    Nationality: false,
  });
  const [{ Country, City, Nationality, }, setData,] = useState({
    Country: { Country: { id: 0, name: null } },
    City: { City: { id: 0, name: null } },
    Nationality: { Nationality: { id: 0, name: null } },
  });
  const [MobileCode, setMobileCode] = useState<any>({ callingCode: ["20"], cca2: "EG" })
  const [PhoneCode, setPhoneCode] = useState<any>({ callingCode: ["20"], cca2: "EG" })
  const { pickImage } = useLibraryPermission();
  useEffect(() => {
    if (Country?.Country.name != null)
      disabled.City = false;
  }, [Country])

  useEffect(() => {
    doneIndividualSignup && navigation.navigate('underReview')
  }, [doneIndividualSignup])
  // console.warn(PhoneCode)
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Personal Information</Text>
      <KeyboardAwareScrollView style={{ height: h }}>
        <Formik
          initialValues={individualRegister_initial_values}
          validationSchema={individualRegisterScheme}
          onSubmit={(data) => {
            const formdata: any = new FormData();
            formdata.append('name', data.name)
            formdata.append('email', data.email)
            formdata.append('password', data.password)
            formdata.append('password_confirmation', data.confirmPassword)
            formdata.append('currency', 'Crypto')
            formdata.append('phone_number', ('+' + PhoneCode?.callingCode[0] + parseInt(data.phoneNumber)))
            formdata.append('mobile_number', ('+' + MobileCode?.callingCode[0] + parseInt(data.mobileNumber)))
            formdata.append('country_id', Country.Country.id)
            formdata.append('city_id', City.City.id)
            formdata.append('nationality_id', Nationality.Nationality.id)
            formdata.append('address', data.address)
            formdata.append('government_id', data.GovernmentID)
            formdata.append('address_proof', data.AddressProof)
            formdata.append('device_token', 'eeee')
            formdata.append('type', 1)
            // alert(JSON.stringify(formdata))
            dispatch(thunks.doIndividualSignUp(formdata))
          }}>
          {props => (
            <>
              <View style={styles.content}>
                <ScrollView>
                  <InputView
                    {...props}
                    name="name"
                    values={props.values}
                    placeholder="Contact Name"
                  />
                  <InputView
                    {...props}
                    name="email"
                    values={props.values}
                    placeholder="Email Address"
                  />
                  <InputView
                    {...props}
                    name="password"
                    placeholder="Password"
                    values={props.values}
                    secureTextEntry
                  />
                  <InputView
                    {...props}
                    name="confirmPassword"
                    values={props.values}
                    placeholder="Confirm Password"
                    secureTextEntry
                  />
                  <MobileInputView
                    {...props}
                    name="phoneNumber"
                    values={props.values}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    setMobileCode={setPhoneCode}
                  />
                  <MobileInputView
                    {...props}
                    name="mobileNumber"
                    values={props.values}
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                    setMobileCode={setMobileCode}
                  />
                  <DropDown
                    {...props}
                    name='Country'
                    selectorsShow={selectorsShow}
                    updateShowSelectors={updateShowSelectors}
                    data={Countries}
                    disabled={disabled.Country}
                    choosen={Country}
                    setChoosen={(value: any) => {
                      setData((prev) => ({ ...prev, Country: value }));
                    }}
                  />
                  <View style={{ marginBottom: -3 }}>
                    <DropDown
                      {...props}
                      name='City'
                      selectorsShow={selectorsShow}
                      updateShowSelectors={updateShowSelectors}
                      data={Cities}
                      disabled={disabled.City}
                      choosen={City}
                      setChoosen={(value: any) => {
                        setData((prev) => ({ ...prev, City: value }));
                      }}
                    />
                  </View>

                  <InputView
                    {...props}
                    name="address"
                    values={props.values}
                    placeholder="Address"
                  />
                  <View style={{ marginBottom: -3 }}>
                    <DropDown
                      {...props}
                      name='Nationality'
                      selectorsShow={selectorsShow}
                      updateShowSelectors={updateShowSelectors}
                      data={Nationalities}
                      disabled={disabled.Nationality}
                      choosen={Nationality}
                      setChoosen={(value: any) => {
                        setData((prev) => ({ ...prev, Nationality: value }));
                      }}
                    />
                  </View>
                  <UploadID
                    {...props}
                    name="Government ID"
                  />
                  <UploadID
                    {...props}
                    name="Address Proof"
                  />
                  <TouchableOpacity activeOpacity={.8} onPress={() => { pickImage(); }} style={styles.face}>
                    <Svg name="Mask" />
                    <Text style={styles.faceText}>Add face recognition</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <Button
                isLoading={loading}
                type={'primary'}
                label={'Sign up'}
                onPress={() => {
                  props.handleSubmit()
                }}
              />
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Individual;
