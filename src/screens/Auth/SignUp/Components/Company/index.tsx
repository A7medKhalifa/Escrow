import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import InputView from 'components/molecules/Input';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import { DropDown } from 'components/molecules/DropDown';
import { Cities, Countries, Nationalities, SwiftCodes } from './DummyData';
import { companyRegister_initial_values } from 'src/formik/initial_values';
import { companyRegisterScheme } from 'src/formik/schema';
import { UploadID } from 'components/molecules/UploadID';
import thunks from 'redux/auth/thunks';
import { useAppDispatch } from 'redux/store';
import AddAuthorizedUser from 'screens/Auth/AddAuthorizedUser';
import { useLoadingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { selectCompanySignup } from 'redux/auth';
import UploadDocument from 'components/molecules/UploadDocument';
import MobileInputView from 'components/molecules/MobileInput';

const Company = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const doneCompanySignup = useSelector(selectCompanySignup)
  const loading = useLoadingSelector(thunks.doCompanySignUp)
  const [visible, setVisable] = useState(false)
  const [userData, setUserData] = useState<any>()
  const [selectorsShow, updateShowSelectors] = useState({
    Country: false,
    City: false,
    SwiftCode: false,
    BankCountry: false,
    BankCity: false,
  });
  const [disabled, setDisabled] = useState<any>({
    Country: false,
    City: true,
    SwiftCode: false,
    BankCountry: false,
    BankCity: true,
  });
  const [{ Country, City, SwiftCode, BankCountry, BankCity }, setData,] = useState({
    Country: { Country: { id: 0, name: null } },
    City: { City: { id: 0, name: null } },
    SwiftCode: { SwiftCode: { id: 0, name: null } },
    BankCountry: { BankCountry: { id: 0, name: null } },
    BankCity: { BankCity: { id: 0, name: null } },
  });
  const [accepted, setAccepted] = useState(false)
  const [MobileCode, setMobileCode] = useState<any>({ callingCode: ["20"], cca2: "EG" })
  useEffect(() => {
    if (Country?.Country.name != null)
      disabled.City = false;
  }, [Country])
  useEffect(() => {
    if (BankCountry?.BankCountry.name != null)
      disabled.BankCity = false;
  }, [BankCountry])
  useEffect(() => {
    doneCompanySignup && navigation.navigate('RegistrationAccepted')
  }, [doneCompanySignup])

  return (
    <View style={styles.container}>
      <Formik
        initialValues={companyRegister_initial_values}
        validationSchema={companyRegisterScheme}
        onSubmit={(data) => {
          const formdata: any = new FormData();
          formdata.append('name', data.name)
          formdata.append('telephone_number', data.Telephone)
          formdata.append('mobile_number', data.MobileNumber)
          formdata.append('mobile_number', ('+' + MobileCode?.callingCode[0] + parseInt(data.MobileNumber)))
          formdata.append('fax_number', data.FaxNumber)
          formdata.append('address', data.address)
          formdata.append('country_id', Country.Country.id)
          formdata.append('city_id', City.City.id)
          formdata.append('trade_license', data.Uploadtradelicense)
          formdata.append('operating_address', data.Operatingaddressproof)
          formdata.append('bank_name', data.BankName)
          formdata.append('bank_iban_number', data.IbanNumber)
          formdata.append('bank_account_number', data.AccountNumber)
          formdata.append('bank_swift_code', SwiftCode.SwiftCode.id)
          formdata.append('bank_country_id', BankCountry.BankCountry.id)
          formdata.append('bank_city_id', BankCity.BankCity.id)
          formdata.append('user_name', userData?.name == null ? '' : userData?.name)
          formdata.append('user_email', userData?.email == null ? '' : userData?.email)
          formdata.append('user_password', userData?.password == null ? '' : userData?.password)
          formdata.append('currency', 'Crypto')

          dispatch(thunks.doCompanySignUp(formdata))
          
        }}>
        {props => (
          <>
            <View style={styles.content}>
              <ScrollView>
                <Text style={styles.text} >Company Information</Text>
                <InputView
                  {...props}
                  name="name"
                  values={props.values}
                  placeholder="Company Name"
                />
                <InputView
                  {...props}
                  name="Telephone"
                  values={props.values}
                  placeholder="Telephone"
                  keyboardType="numeric"
                />
                <InputView
                  {...props}
                  name="FaxNumber"
                  values={props.values}
                  placeholder="Fax Number"
                  keyboardType="numeric"
                />
                <MobileInputView
                  {...props}
                  name="MobileNumber"
                  values={props.values}
                  placeholder="Mobile Number"
                  keyboardType="numeric"
                  setMobileCode={setMobileCode}
                />
                <InputView
                  {...props}
                  name="address"
                  values={props.values}
                  placeholder="Address"
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
                <UploadDocument
                  {...props}
                  name="Upload trade license"
                />
                <UploadDocument
                  {...props}
                  name="Operating address proof"
                />

                <TouchableOpacity activeOpacity={.8}
                  onPress={() => setVisable(true)}
                  style={styles.button}>
                  <Text style={styles.buttonText} >Add authorized users</Text>
                </TouchableOpacity>

                <Text style={styles.text} >Bank Details</Text>
                <InputView
                  {...props}
                  name="BankName"
                  values={props.values}
                  placeholder="Bank Name"
                />
                <InputView
                  {...props}
                  name="IbanNumber"
                  placeholder="Iban Number"
                  values={props.values}
                />
                <InputView
                  {...props}
                  name="AccountNumber"
                  values={props.values}
                  placeholder="Account Number"
                />

                <DropDown
                  {...props}
                  name='Swift Code'
                  selectorsShow={selectorsShow}
                  updateShowSelectors={updateShowSelectors}
                  data={SwiftCodes}
                  disabled={disabled.SwiftCode}
                  choosen={SwiftCode}
                  setChoosen={(value: any) => {
                    setData((prev) => ({ ...prev, SwiftCode: value }));
                  }}
                />
                <DropDown
                  {...props}
                  name='Bank Country'
                  selectorsShow={selectorsShow}
                  updateShowSelectors={updateShowSelectors}
                  data={Countries}
                  disabled={disabled.BankCountry}
                  choosen={BankCountry}
                  setChoosen={(value: any) => {
                    setData((prev) => ({ ...prev, BankCountry: value }));
                  }}
                />
                <DropDown
                  {...props}
                  name='Bank City'
                  selectorsShow={selectorsShow}
                  updateShowSelectors={updateShowSelectors}
                  data={Cities}
                  disabled={disabled.BankCity}
                  choosen={BankCity}
                  setChoosen={(value: any) => {
                    setData((prev) => ({ ...prev, BankCity: value }));
                  }}
                />


                <View style={styles.CheckContainer}>
                  <TouchableOpacity activeOpacity={.8} onPress={() => { setAccepted(!accepted) }}>
                    <Svg name={accepted ? "fillCheckbox" : 'unfillCheckbox'} height={25} width={25} />
                  </TouchableOpacity>
                  <Text style={styles.Text}>I accept the <Text style={styles.Terms} onPress={() => Linking.openURL('https://o-projects.org')}>
                    terms and conditions</Text>. I confirm that all information is correct.</Text>
                </View>
              </ScrollView>
            </View>
            <AddAuthorizedUser userData={userData} visible={visible} setVisable={setVisable} setData={setUserData} />
            <Button
              isLoading={loading}
              type={'primary'}
              label={'Sign up'}
              onPress={() => {
                props.handleSubmit()
              }
              }
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Company;
